import React,{useState, useEffect, useContext} from 'react';
import TextField from "@material-ui/core/TextField";
import { useQuery, useLazyQuery } from "@apollo/client";
import { enumerateCompanies } from "../../graphql/queries/company";
import {useDebounce} from '../../custom-hooks/useDebounce';
import {stateContext} from '../../context/authentication/authContext';
import {setIsLoading} from '../../context/authentication/action';
import Notification,{ AlertTypes } from "../../services/notify";

let query=enumerateCompanies('');

export default function CompaniesLanding() {
    const [name, setname] = useState('');
    const context:any = useContext(stateContext);
    const debounceName = useDebounce(name,1000);
    useEffect(() => {
        query= enumerateCompanies(debounceName);
        getCompanies();
     }, [debounceName]);

     const [getCompanies, { loading,data, error }] = useLazyQuery(query,{
         fetchPolicy: 'cache-and-network'
     });

     useEffect(() => {
        if (loading){
           context.dispatch(setIsLoading(true));
        }
        if (data){
            context.dispatch(setIsLoading(false));
        }
        if (error){
            Notification.sendNotification(error,AlertTypes.warn);
        }
        return () => {
          return;
        }
      }, [loading, data,error]);


    const changeInName=(argEvent: any)=>{
        setname(argEvent.target.value);
    }

    return (
        <>
         <TextField
                      required
                      fullWidth
                      id="email"
                      placeholder="name"
                      name="name"
                      autoComplete="email"
                      value={name}
                      onChange={changeInName}
                    />
    {data && data.company.map((company: any) => (
    <h4 key={company.id}>{company.name}</h4>
      ))}
        </>
    )
}

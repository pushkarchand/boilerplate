import React,{useState, useEffect, useContext} from 'react';
import TextField from "@material-ui/core/TextField";
import { useQuery, useLazyQuery } from "@apollo/client";
import { enumerateCompanies } from "../../graphql/queries/company";
import {useDebounce} from '../../custom-hooks/useDebounce';
import {stateContext} from '../../context/authentication/authContext';
// import {setIsAuthenticated, setIsLoading} from '../../context/authentication/action';

export default function CompaniesLanding() {
    const [name, setname] = useState('');
    const context:any = useContext(stateContext);
    const debounceName = useDebounce(name,1000);
    useEffect(() => {
        getWeather();
     }, [debounceName]);

     const [getWeather, { data, error }] = useLazyQuery(enumerateCompanies(debounceName),{
         fetchPolicy: 'network-only'
     });
    if (error) console.log(error);
    if(data) console.log(data);

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

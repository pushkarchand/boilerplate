import React, { Fragment, useContext,useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import TextField from "@material-ui/core/TextField";
import { enumerateProjects } from "../../graphql/queries/project";
import  ProjectItem  from "../../components/projectItem";
import {useDebounce} from '../../custom-hooks/useDebounce';
import {stateContext} from '../../context/authentication/authContext';
import {setIsLoading} from '../../context/authentication/action';
import Notification,{ AlertTypes } from "../../services/notify";
import './index.scss';

let query=enumerateProjects('');

export default function ProjectsLanding() {
  const [name, setname] = useState('');
  const debounceName = useDebounce(name,1000);
  const context:any = useContext(stateContext);
  const [getProjects, { loading,data, error }] = useLazyQuery(query,
  {
    fetchPolicy: 'network-only'
});

  /**
   * OnInit, OnChange, OnDestroy
   */
  useEffect(() => {
    query=enumerateProjects(debounceName);
    getProjects();
 }, [debounceName]);

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
    <Fragment>
       <TextField
              fullWidth
              id="email"
              placeholder="name"
              name="name"
              autoComplete="email"
              value={name}
              onChange={changeInName}
                    />
      <div className="projectLanding__body">
      {data && data.project.map((project: any) => (
        <ProjectItem key={project.id} project={project}/>
      ))}
      </div>

    </Fragment>
  );
}
 
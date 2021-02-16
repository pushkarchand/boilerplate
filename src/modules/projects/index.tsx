import React, { Fragment } from "react";
import { useQuery } from "@apollo/client";
import { enumerateProjects } from "../../grqphql-queries/project";
import  ProjectItem  from "../../components/projectItem";

export default function ProjectsLanding() {
  const { loading, error, data } = useQuery(enumerateProjects());
  if (loading) return <h4>Loading...</h4>;
  if (error) console.log(error);
  if(data) console.log(data);

  return (
    <Fragment>
      {data && data.project.map((project: any) => (
        <ProjectItem key={project.id} project={project}/>
      ))}
    </Fragment>
  );
}
 
import React, { Fragment } from "react";
import { useQuery } from "@apollo/client";
import { enumerateProjects } from "../../graphql-models/projects";
import  ProjectItem  from "../../components/projectItem"

export default function ProjectsLanding() {
  const { loading, error, data } = useQuery(enumerateProjects());
  if (loading) return <h4>Loading...</h4>;
  if (error) console.log(error);

  return (
    <Fragment>
      {data && data.launches.map((launch: any) => (
        <ProjectItem key={launch.flight_number} launch={launch}/>
      ))}
    </Fragment>
  );
}
 
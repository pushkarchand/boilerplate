import { gql } from '@apollo/client';
import {tenantProjectRole} from '../utils/role';

export const enumerateProjects =()=>{

  return gql`
  query ${tenantProjectRole.viewTenantProjects} {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;
}
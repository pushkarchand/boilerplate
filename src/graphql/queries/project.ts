import { gql } from '@apollo/client';
import {myProjectRole, tenantProjectRole} from '../../utils/role';
import {Project} from '../models/projects';
import {getRole} from '../../services/permission';

export const enumerateProjects =(searchText: string = '', offset: number = 0, limit: number = 10000)=>{

    const role = getRole(myProjectRole.viewMyProjects, tenantProjectRole.viewTenantProjects);
    return gql`
      query ${role} {
        ${Project.modelName}(
          offset: ${offset}, 
          limit: ${limit},
          where: 
            {
              ${Project.selector.name}: {_ilike: "%${searchText}%"}
            },
            order_by: {${Project.selector.name}: asc}
          ) {
              ${Project.selector.id}
              ${Project.selector.name}
              ${Project.selector.status}
              ${Project.selector.address}
              ${Project.selector.config}
          }
        }
      `;
}
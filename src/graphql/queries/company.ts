import { gql } from '@apollo/client';
import {myCompanyRoles, tenantCompanyRole} from '../../utils/role';
import {Company} from '../models/company';
import {getRole} from '../../services/permission';

export const enumerateCompanies=(searchText: string = '', offset: number = 0, limit: number = 10000)=>{
 const role = getRole(myCompanyRoles.viewMyCompanies, tenantCompanyRole.viewTenantCompanies);
return gql`
              query ${role} {
                ${Company.modelName}(
                  offset: ${offset}, 
                  limit: ${limit},
                  where: 
                    {
                      ${Company.selector.name}: {_ilike: "%${searchText}%"}
                    },
                  order_by: {${Company.selector.name}: asc}
                  )
                  {
                    ${Company.selector.id}
                    ${Company.selector.name}
                    ${Company.selector.active}
                    ${Company.selector.address}
                    ${Company.selector.companyId}
                    ${Company.selector.trade}
                    ${Company.selector.contactInfo}
                  }
                }
              `;
}
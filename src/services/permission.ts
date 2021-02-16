import {decodeExchangeToken} from './authservice';
export function getRole(myRole: string, tenantRole: string): string{
    if(decodeExchangeToken().allowedRoles.includes(myRole)){
        return myRole;
      }else {
        return tenantRole;
      }
}
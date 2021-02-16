/* eslint-disable @typescript-eslint/naming-convention */
export interface DecodedToken {
    'user-name': string;
    'user-id': string;
    'user-email': string;
    'tenant-id': string;
    'tenant-name': string;
    'tenant-company': string;
    'x-hasura-user-id': string;
    'x-hasura-tenant-id': string;
    'X-hasura-project-id': string;
    'x-hasura-allowed-roles': Array<string>;
    'x-hasura-default-role': string;
    type: string;
    exp: number;
    iat: number;
  }
  
  export class Token {
    userName: string;
    userId: string;
    userEmail: string;
    tenantId: string;
    tenantName: string;
    tenantCompany: string;
    type: any;
    exp: any;
    iat: any;
  
    constructor(dToken: DecodedToken) {
      this.userId = dToken['x-hasura-user-id'];
      this.userName = dToken['user-name'];
      this.userEmail = dToken['user-email'];
      this.tenantId = dToken['x-hasura-tenant-id'];
      this.tenantName = dToken['tenant-name'];
      this.tenantCompany = dToken['tenant-company'];
      this.type = dToken.type ? dToken.type : '';
      this.exp = dToken.exp ? dToken.exp : '';
      this.iat = dToken.iat ? dToken.iat : '';
    }
  }
  
  
  export class ExchangeToken {
    userName: string;
    userId: string;
    userEmail: string;
    tenantId: string;
    tenantName: string;
    tenantCompany: string;
    allowedRoles: Array<string>;
    defaultRole: string;
    exp: any;
    iat: any;
  
    constructor(dToken: DecodedToken) {
      this.userId = dToken['x-hasura-user-id'];
      this.userName = dToken['user-name'];
      this.userEmail = dToken['user-email'];
      this.tenantId = dToken['x-hasura-tenant-id'];
      this.tenantName = dToken['tenant-name'];
      this.tenantCompany = dToken['tenant-company'];
      this.allowedRoles = dToken['x-hasura-allowed-roles'];
      this.defaultRole = dToken['x-hasura-default-role'];
      this.exp = dToken.exp ? dToken.exp : '';
      this.iat = dToken.iat ? dToken.iat : '';
    }
  }
  
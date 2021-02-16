export abstract class Company {
    static modelName = 'company';
    static selector = {
      id: 'id',
      name: 'name',
      address : 'address',
      tenantId : 'tenantId',
      tenant: 'tenant',
      active: 'active',
      companyId: 'companyId',
      companyInfo: 'companyInfo',
      trade: 'trade',
      timezoneId: 'timezoneId',
      location: 'location',
      createdBy: 'createdBy',
      userId: 'userId',
      status: 'status',
      contactInfo: 'contactInfo',
      updatedBy: 'updatedBy',
      affectedRows: 'affected_rows'
    };
    static relation= {
      companyAssociation: 'companyAssociation'
    };
  }
export const routes=[
    {
        name:'Teammates',
        path:'/teammates'
    },
    {
        name:'Companies',
        path:'/companies'
    },
    {
        name:'Projects',
        path:'/projects'
    },
    {
        name:'Roles',
        path:'/roles'
    },
    {
        name:'Forms',
        path:'/forms'
    }
];

export const formTemplates=[
    {
        name:'firstName',
        label: 'First Name',
        placeholder: 'First name',
        defaultValue: 'New',
        type:'text',
        validationProps:{
                required: 'First name is required'
        }
    },
    {
        name:'lastName',
        label: 'Last Name',
        placeholder: 'Last name',
        defaultValue: 'Last',
        type:'text',
        validationProps:{
                required: 'Last name is required'
        }
    },
    {
        name:'email',
        label: 'Email',
        placeholder: 'Email',
        defaultValue: '',
        type:'text',
        validationProps:{
                required: 'Email is required'
        }
    },
    {
        name:'mobile',
        label: 'Mobile',
        placeholder: 'Mobile',
        defaultValue: '',
        type:'text',
        validationProps:{
                required: 'Mobile is required',
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                }
        }
    },
    {
        name:'address',
        label: 'Address',
        placeholder: 'Address',
        defaultValue: 'New',
        type:'text',
        validationProps:{
                required: 'Address is required'
        }
    }
]
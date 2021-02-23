import {getToken} from './authservice';
const axios = require('axios');
const axiosApiInstance = axios.create();

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config: { headers: { Authorization: string; 'Content-Type': string;}; }) => {
    const tokenStr=getToken();
    config.headers = { 
      'Authorization': `Bearer ${tokenStr}`,
      'Content-Type': 'application/json'
    }
    return config;
  },
    (  error: any) => {
    Promise.reject(error)
});

// Response interceptor for API calls
// Checks for the error response and if the satus is 401
// then Fetch the token and retry the original request again
axiosApiInstance.interceptors.response.use((response: any) => {
  return response
}, async function (error: { config: any; response: { status: number; }; }) {
  const originalRequest = error.config;
  // if (error.response.status === 401 && !originalRequest._retry) {
    // originalRequest._retry = true;
    // const access_token = await refreshAccessToken();            
    // axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
    // return axiosApiInstance(originalRequest);
  // }
  return Promise.reject(error);
});

/**
 * Method to refetch token on token expiry
 */
export async function refreshAccessToken(){
    return axios.post(`${process.env["REACT_APP_BACKEND_API"]}V1/user/login`)
    .then((response: { data: any; })=>{
        let data = response.data;
        return data;
    }).catch((error: string | undefined)=>{
        throw new Error(error);            
    })
}

/**
 * Common Get method
 * @param {*} url : string
 */
export async function getApi (url: any) {
        return axiosApiInstance.get(`${process.env["REACT_APP_BACKEND_API"]}${url}`)
        .then((response: { data: any; })=>{
            let data = response.data;
            return data;
        }).catch((error: string | undefined)=>{
            throw new Error(error);            
        })
}




/**
 * Common API to Create an Entity / common post API
 * @param {*} url : string
 * @param {*} argBody : Object
 */
export async function postApi (url: any,argBody: any) {
    try{
        let response = await axiosApiInstance.post(`${process.env["REACT_APP_BACKEND_API"]}${url}`,argBody);
        let data =  response.data;
        return data;
    } catch(error){
        throw new Error(error);
    }
}

// Method to login user
export async function login(requestBody: any){
  return axios.post(`${process.env["REACT_APP_BACKEND_API"]}V1/user/login`,requestBody)
    .then((response: { data: any; })=>{
        let data = response;
        return data;
    }).catch((error: string | undefined)=>{
      console.log(error);
        throw new Error(error);            
    })
}
  
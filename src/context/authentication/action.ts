export const IS_AUTHENTICATED="IS_AUTHENTICATED";
export const USERNAME="USERNAME";
export const ISLOADING= "ISLOADING";

export const setIsAuthenticated=(payload: any)=>{
        return {
            type:IS_AUTHENTICATED,
            payload
        }
}

export const setUserName=(payload: any)=>{
    return {
        type:USERNAME,
        payload
    }
}

export const setIsLoading=(payload: any)=>{
    return {
        type:ISLOADING,
        payload
    }
}
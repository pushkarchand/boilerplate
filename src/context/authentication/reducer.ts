import {IS_AUTHENTICATED,USERNAME, ISLOADING} from './action';
export const initialState={
    isAuthenticated:localStorage.getItem('accessToken')?true:false,
    userName:"",
    isLoading: false,
    purchasedBook: null,
    paymentOpen: false
}

export const stateReducer=(state=initialState,action: any)=>{
    switch(action.type){
        case IS_AUTHENTICATED:{
            return {
                ...state,
                isAuthenticated:action.payload
            }
        }
        case USERNAME:{
            return {
                ...state,
                userName:action.payload
            }
        }
        case ISLOADING:{
            return {
                ...state,
                isLoading:action.payload
            }
        }
        default: return state
    }
}
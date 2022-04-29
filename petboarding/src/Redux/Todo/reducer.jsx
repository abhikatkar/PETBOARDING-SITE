
import { ADD_TODO, GET_ERROR, GET_LOADDING } from "./action";

const initState = {
    todo:[],
    loadding: false,
    error:false
}

export const todoReducer = (store = initState,{type,payload}) =>{

    switch(type){

        case ADD_TODO:
            return {...store, todo:payload , loadding:false };
        
        case GET_LOADDING:
            return {...store, loadding:true}    

        case GET_ERROR:
            return {...store, error:true} 
        default:
            return store;
    }
};




// action type

export const ADD_TODO = "ADD_TODO";

export const GET_LOADDING = "GET_LOADDING";

export const GET_ERROR = "GET_ERROR";



// action creation 

export const addTodo = (todo)=>({type: ADD_TODO , payload:todo});   

export const getLoadding = ()=>({type:GET_LOADDING});

export const getError = () => ({type:GET_ERROR});

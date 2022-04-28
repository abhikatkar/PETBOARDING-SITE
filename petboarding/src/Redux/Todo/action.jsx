

// action type

export const ADD_TODO = "ADD_TODO";




// action creation 

export const addTodo = (todo)=>({type: ADD_TODO , payload:todo});
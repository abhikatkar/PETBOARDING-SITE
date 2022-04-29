

export const ADD_COUNT = "ADD_COUNT";

export const SUB_COUNT = "SUB_COUNT";



export const addCount = (payload) => ({type:ADD_COUNT , payload:payload});

export const subCount = (payload) => ({type:SUB_COUNT , payload:payload});
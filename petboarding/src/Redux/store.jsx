


import { createStore, combineReducers } from 'redux';

import { todoReducer } from './Todo/reducer';
import { countReducer } from './Count/reducer';


const rootReducer = combineReducers({
    count:countReducer,
    todo:todoReducer
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



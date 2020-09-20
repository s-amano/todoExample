import { createStore } from 'redux'
import todoAppReducers from './reducers/index'
  
const store = createStore(todoAppReducers);

export default store;
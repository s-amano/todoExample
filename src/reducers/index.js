import { combineReducers } from 'redux'
import todoReducers from './todos'

const todoAppReducers = combineReducers({ todoReducers })
export default todoAppReducers
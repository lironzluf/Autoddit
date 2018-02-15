import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import appReducer from "./appReducer";

export default combineReducers({
    app: appReducer,
    routing: routerReducer
})

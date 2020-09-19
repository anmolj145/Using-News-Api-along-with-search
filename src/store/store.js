import { createStore , applyMiddleware , compose , combineReducers } from 'redux'
import thunk from "redux-thunk";
import mainReducer from "./reducer/mainReducer"

const composeEnhancers = compose ;
const  appReducer = combineReducers({
    mainReducer : mainReducer
})

const  rootReducer =  (state,action) => {
    return appReducer(state,action)
}
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

export default store;
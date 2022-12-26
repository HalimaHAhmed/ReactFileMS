import {applyMiddleware ,combineReducers,createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import authreducer from "../reducers/authreducers";



const store = createStore(
    combineReducers({authreducer}),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store
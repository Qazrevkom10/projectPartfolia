
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
// import { reducer as formReducer } from 'redux-form'
import {AppReducer} from "./AppReducer";

const reducers = combineReducers({

    app: AppReducer,
})
const store = createStore(reducers,applyMiddleware(thunk));
Window.store= store;
export default store;

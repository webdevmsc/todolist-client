import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import todoReducer from "./todo-reducer";

let reducers = combineReducers({
    auth: authReducer,
    app: appReducer,
    todo: todoReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

export default store;
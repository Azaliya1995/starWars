import {applyMiddleware, combineReducers, createStore} from "redux";
import starshipReducer from "../reducers/starshipReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    starshipPage: starshipReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

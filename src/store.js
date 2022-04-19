import { createStore,applyMiddleware } from "redux";
import rootReducer from "./redux/reducer";
 import {thunk} from "redux-thunk"
const middlewares = [thunk];

const store = createStore(rootReducer)

export default store
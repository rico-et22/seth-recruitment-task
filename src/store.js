import { createStore, combineReducers } from "redux";
import commentsReducer from "./reducers/commentsReducer";

const rootReducer = combineReducers({
  comments: commentsReducer
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

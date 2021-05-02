import { createStore, combineReducers } from "redux";
import commentsReducer from "./reducers/commentsReducer";
import newCommentFormReducer from "./reducers/newCommentFormReducer";

const rootReducer = combineReducers({
  comments: commentsReducer,
  newCommentForm: newCommentFormReducer
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

const initialState = {
  showForm: false
};
const newCommentFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "newCommentForm/show": {
      return {showForm: true}
    }
    case "newCommentForm/hide": {
      return {showForm: false}
    }
    default:
      return state;
  }
};

export default newCommentFormReducer;

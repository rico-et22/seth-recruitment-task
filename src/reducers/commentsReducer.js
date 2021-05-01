const initialState = [];
const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "comments/added": {
      const newState = state.concat(action.payload)
      return [...new Set(newState)];
    }
    case "comments/updated": {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item
        }
        return {
          ...item,
          ...action.payload
        }
      })
    }
    case "comments/removed":
      return [...state.filter((comment) => comment !== action.payload)];
    default:
      return state;
  }
};

export default commentReducer;

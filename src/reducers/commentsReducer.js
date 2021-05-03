const initialState = {
  data: [],
  isLoading: false,
  isInitialized: false,
  pages: 0,
  currentPage: 0,
};
const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "comments/added": {
      const newState = state.data.concat(action.payload.data);
      const newPageCount = Math.ceil(newState.length / 20);
      return {
        ...state,
        isLoading: false,
        data: [...new Set(newState)],
        pages: newPageCount,
        currentPage: action.payload.openPageWithAddedComment
          ? newPageCount - 1
          : state.currentPage,
      };
    }
    case "comments/updated": {
      const mappedData = state.data.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          ...action.payload,
        };
      });
      return { ...state, data: mappedData };
    }
    case "comments/deleted":
      return {
        ...state,
        data: [
          ...state.data.filter((comment) => comment.id !== action.payload.id),
        ],
      };
    case "comments/startedLoading":
      return { ...state, isLoading: true };
    case "comments/finishedLoading":
      return { ...state, isLoading: false };
    case "comments/initialized":
      return { ...state, isInitialized: true };
    case "comments/pageChanged":
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

export default commentReducer;

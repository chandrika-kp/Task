const initialState = {
    jobsList: [],
    // searchFilter: '',
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_JOBS':
        return {
          ...state,
          jobsList: action.payload,
        };
    //   case 'SET_SEARCH_FILTER':
    //     return {
    //       ...state,
    //       searchFilter: action.payload,
    //     };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  
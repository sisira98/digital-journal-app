const initialState = {
  sharedData: null,
  selectedEntryId: null,
  selectedEntry: null,
  listData: []
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_ENTRY_DATA':
      return {
        ...state,
        sharedData: action.payload,
      };
    case 'SET_SELECTED_ENTRY_ID':
      return {
        ...state,
        selectedEntryId: action.payload,
      };
    case 'CREATE_ENTRY_DATA':
      return {
        ...state,
        sharedData: action.payload,
      };
    case 'LIST_ENTRIES_SUCCESS':
      return {
        ...state,
        listData: action.payload,
      };
    case 'DELETE_ENTRY_SUCCESS':
      return {
        ...state,
      };
    case 'EDIT_ENTRY_SUCCESS':
      return {
        ...state,
      };
    case 'GET_SELECTED_ENTRY':
      return {
        ...state,
        selectedEntry: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
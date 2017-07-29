const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_DATA':
      return {
        ...state,
        data: [],
        isFetching: true,
        dataFetched: false,
        error: false
      }
    case 'FETCHING_DATA_SUCCESS':
      return {
        ...state,
        isFetching: false,
        dataFetched: true,
        data: action.data
      }
    case 'FETCHING_DATA_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}
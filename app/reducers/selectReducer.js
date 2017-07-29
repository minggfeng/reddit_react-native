const initialState = [];

export default (state = initialState, action ) => {
  switch (action.type) {
    case 'SELECT':
      return action.post
    default:
      return state
  }
}
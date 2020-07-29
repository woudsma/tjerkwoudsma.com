const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_POSTS':
      return action.data
    default:
      return state
  }
}

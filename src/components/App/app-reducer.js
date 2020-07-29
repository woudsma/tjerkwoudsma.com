const initialState = {
  initialized: false,
  pages: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_APP':
      return {
        ...state,
        initialized: true,
      }
    case 'RESET_APP':
      return {
        ...initialState,
      }
    case 'UPDATE_PAGES':
      return {
        ...state,
        pages: action.data.reduce(
          (acc, curr) => ({ ...acc, [curr.title]: curr }),
          {},
        ),
      }
    default:
      return state
  }
}

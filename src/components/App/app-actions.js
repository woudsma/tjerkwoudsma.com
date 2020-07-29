export const initApp = () => async (dispatch, getState) => {
  dispatch({ type: 'INIT_APP' })
}

export const updatePages = data => async (dispatch, getState) => {
  dispatch({ type: 'UPDATE_PAGES', data })
}

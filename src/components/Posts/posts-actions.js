export const updatePosts = data => async (dispatch, getState) => {
  dispatch({ type: 'UPDATE_POSTS', data })
}

export const menuItemsSelector = state =>
  Object.values(state.app.pages).map(({ title, slug }) => ({ title, slug }))

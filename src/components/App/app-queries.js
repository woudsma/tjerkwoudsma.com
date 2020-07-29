export const getPagesQuery = `
  *[_type=='page'] {
    ...,
    "id": _id,
    "slug": slug.current,
    title,
  }
`

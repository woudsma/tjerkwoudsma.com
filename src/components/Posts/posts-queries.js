export const getPostsQuery = `
  *[_type=='post'] {
    ...,
    "id": _id,
    "slug": slug.current,
    title,
    // "body": sanitygrid,
    publishedAt,
  }
`

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useQuery } from 'react-query'
import './Posts.scss'
import { sanityClient } from '../../index'
import { updatePosts } from './posts-actions'
import { getPostsQuery } from './posts-queries'
import { postsSelector } from './posts-selectors'

import BlockContent from '../BlockContent/BlockContent'

const Posts = () => {
  const dispatch = useDispatch()
  const posts = useSelector(postsSelector)
  const { isLoading, error, data } = useQuery('posts', () =>
    sanityClient.fetch(getPostsQuery),
  )

  useEffect(() => {
    if (!posts.length && data) dispatch(updatePosts(data))
  }, [posts, data, dispatch])

  return (
    <div className="Posts">
      {isLoading && <div>Loading...</div>}
      {error && <div>Error fetching data</div>}
      {data && (
        <div>
          {data.map(({ id, body }) => (
            <BlockContent key={id} body={body} />
          ))}
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default Posts

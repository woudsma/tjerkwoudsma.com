import React from 'react'
import { useSelector } from 'react-redux'
import { pageSelector } from './page-selectors'
import './Page.scss'

import BlockContent from '../BlockContent/BlockContent'

const Page = ({ title, children }) => {
  const page = useSelector(pageSelector(title))

  return (
    <div className="Page">
      <BlockContent page={page} />
      {children}
    </div>
  )
}

export default Page

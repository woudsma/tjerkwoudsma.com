import React from 'react'
import SanityBlockContent from '@sanity/block-content-to-react'

const BlockRenderer = props => {
  const { style, markDefs } = props.node

  if (style === 'inlineCode') {
    const { code } = markDefs.slice().pop()
    return <div dangerouslySetInnerHTML={{ __html: code }} />
  }

  return SanityBlockContent.defaultSerializers.types.block(props)
}

const BlockContent = props => {
  const { page, body } = props

  return (page && page.body) || body ? (
    <SanityBlockContent
      className="BlockContent"
      blocks={body || page.body}
      serializers={{ types: { block: BlockRenderer } }}
    />
  ) : null
}

export default BlockContent

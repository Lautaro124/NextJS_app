import React from 'react'

const Post = ({ params }) => {
  const { id } = params

  return (
    <div>Post {id}</div>
  )
}

export default Post

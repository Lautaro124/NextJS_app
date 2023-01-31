import React from 'react'

const PostLayout = ({ children }) => {
  return (
    <div>
      <marquee>Home &bull; Posts</marquee>
      {children}
    </div>
  )
}

export default PostLayout

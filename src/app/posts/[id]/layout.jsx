import Link from 'next/link'
import React from 'react'

const fetchPost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store',
    next: {
      revalidate: 60
    }
  })
    .then(response => response.json())
}

const Post = async ({ children, params }) => {
  const { id } = params
  const post = await fetchPost(id)
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>
        Ver comentarios
      </Link>
      {children}
    </article>
  )
}

export default Post

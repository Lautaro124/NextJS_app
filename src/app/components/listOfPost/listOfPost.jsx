import Link from 'next/link'
import React from 'react'
import LikeButton from '../likeButton/likeButton'

const fetchPost = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
    next: {
      revalidate: 60
    }
  })
    .then(response => response.json())
}

const listOfPost = async () => {
  const posts = await fetchPost()

  return posts.slice(0, 5).map(post => (
    <article key={post.id}>
      <Link
        href='/posts/[id]'
        as={`/posts/${post.id}`}
      >
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </Link>
      <LikeButton />
    </article>
  ))
}

export default listOfPost

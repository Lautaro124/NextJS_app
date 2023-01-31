import Image from 'next/image'
import React from 'react'

const fetchComments = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    cache: 'no-store',
    next: {
      revalidate: 60
    }
  })
    .then(response => response.json())
}

const Comments = async ({ params }) => {
  const { id } = params
  const comments = await fetchComments(id)
  return (
    <ul style={{ fontSize: '14px', margin: '10px' }}>
      {
        comments.map(comment => (
          <li key={comment.id}>
            <Image
              alt={comment.name}
              src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`}
              width='70'
              height='70'
            />
            <h3>{comment.name}</h3>
            <small>{comment.body}</small>
          </li>
        ))
      }
    </ul>
  )
}

export default Comments

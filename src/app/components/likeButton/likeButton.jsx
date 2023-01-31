'use client'
import React, { useState } from 'react'

const LikeButton = () => {
  const [like, SetLike] = useState(false)

  return (
    <button onClick={() => SetLike(!like)}>
      {like ? '♥' : '♡'}
    </button>
  )
}

export default LikeButton

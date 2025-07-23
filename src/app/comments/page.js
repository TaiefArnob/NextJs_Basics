import React from 'react'
import getComments from '../../../services/getComments'

const Page = async () => {
  const response = await getComments()
  const comments = response?.comments || []  // ✅ fallback to empty array

  return (
    <div>
      <h1>Users Comments</h1>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id} className="border p-4 my-2 rounded-md bg-gray-100">
            <h2 className="text-lg font-semibold">{comment.user.fullName}</h2>
            <p className="text-gray-700 italic">"{comment.body}"</p>
            <p className="text-sm text-gray-500">Likes: {comment.likes}</p>
          </div>
        ))
      ) : (
        <p>No comments found.</p>
      )}
    </div>
  )
}

export default Page

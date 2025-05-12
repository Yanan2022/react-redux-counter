import React from 'react'
import { useSelector } from 'react-redux'

const PostList = () => {
  const posts = useSelector(state => state.posts)

  if (!posts.length) {
    return (
      <div className="container mt-4 text-center text-muted">
        Aucun post pour le moment.
      </div>
    )
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Liste des posts</h2>
      <div className="row g-3">
        {posts.map((post) => (
          <div className="col-md-6" key={post.id}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostList

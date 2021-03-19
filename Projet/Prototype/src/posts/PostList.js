import React, { Component } from 'react'
import PostData from '../data/data.json'


class PostList extends Component {
  render() {
    return (
      <div className="container">
        <div>
            {PostData.map((postDetail, index) =>{
              return <h2>{postDetail.question}</h2>
            })}
        </div>
      </div>
    )
  }
}

export default PostList
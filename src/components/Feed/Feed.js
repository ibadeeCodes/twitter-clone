import React, { useState, useEffect } from 'react'
import './Feed.scss'
import BlurOnIcon from '@material-ui/icons/BlurOn'
import TweetBox from './TweetBox'
import Post from './Post'
import { db } from '../../firebase'
import FlipMove from 'react-flip-move'

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  return (
    <div className='feed'>
      {/* Header */}
      <div className='feed__header'>
        <h2>Home</h2>
        <BlurOnIcon />
      </div>
      {/* TweetBox */}
      <TweetBox />

      <FlipMove>
        {posts &&
          posts.map((post) => (
            <Post
              displayName={post.displayName}
              verified={post.verified}
              username={post.username}
              avatar={post.avatar}
              description={post.description}
              image={post.image}
            />
          ))}
      </FlipMove>
    </div>
  )
}

export default Feed

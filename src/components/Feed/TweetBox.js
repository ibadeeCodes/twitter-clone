import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import './TweetBox.scss'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import { db, storage } from '../../firebase'

import { Button } from '@material-ui/core'

const TweetBox = () => {
  const [post, setPost] = useState({
    displayName: 'Ibad Shaikh',
    username: 'ibad.shaikh',
    verified: true,
    avatar:
      'https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png',
    description: '',
    image: '',
  })

  const onChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    })
  }

  let { description, image } = post

  const sendTweet = (e) => {
    e.preventDefault()
    if (description === '') {
      console.log('description is mandatory!')
    } else {
      db.collection('posts').add(post)

      setPost({
        ...post,
        description: '',
        image: '',
      })
    }
  }

  return (
    <div className='tweetBox'>
      <form onSubmit={sendTweet}>
        <div className='tweetBox__input'>
          <Avatar src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png' />
          <input
            placeholder="What's happening?"
            type='text'
            value={description}
            name='description'
            onChange={onChange}
          />
        </div>
        <div className='tweetBox__image'>
          <PhotoLibraryIcon className='tweetBox__picture' />
          <input
            placeholder='Optional : Upload Image'
            type='text'
            className='tweetBox__image'
            value={image}
            name='image'
            onChange={onChange}
          />
        </div>
        <Button className='tweetBox__tweetbutton' type='submit'>
          tweet
        </Button>
      </form>
    </div>
  )
}
export default TweetBox

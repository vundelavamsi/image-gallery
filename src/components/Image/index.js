import React from 'react'
import './index.css'

const Image = ({eachImage}) => {
  return (
    <li className='each-image'>
        <img src={eachImage.urls.small} className='image' />
    </li>
  )
}

export default Image
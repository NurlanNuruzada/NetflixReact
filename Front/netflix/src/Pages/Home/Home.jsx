import React from 'react'
import BackgroundImage from '../../Images/InitialBackgroundImage.jpg'
import Styles from './Home.module.css'
export const Home = () => {
  return (
    <div>
      <div className={Styles.MainContainer}>
        <img src={BackgroundImage}></img>
      </div>
    </div>
  )
}

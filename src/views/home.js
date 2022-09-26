import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>zion-off</title>
        <meta property="og:title" content="zion-off" />
      </Helmet>
      <span className="home-text">zion-off</span>
    </div>
  )
}

export default Home

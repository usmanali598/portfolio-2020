import React, { Component } from 'react'
import Navbur from './navbar/Navbur'
import Form from './form/Form'
import Tehtava from './tehtava/Tehtava'
import Footer from './footer/Footer'
import Home from './home/Home'
import Blocks from './portfolio/Blocks'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbur />
        <Home />
        <Tehtava />
        <hr className='ap-saa'></hr>
        <h2 style={{padding:'30px'}}>These Projects and most of their URLs are outdated. 
        It has been a long time to touch these projects and this portfolio site so no time and interest to maintain for now.</h2>
        <Blocks />
        <Form />
        <Footer />
      </div>
    )
  }
}

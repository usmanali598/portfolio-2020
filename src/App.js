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
        <Blocks />
        <Form />
        <Footer />
      </div>
    )
  }
}

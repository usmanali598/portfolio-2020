import React, { Component } from 'react'
import '../index.css';

export default class Home extends Component {
    render() {
        return (
            <div className='home-main' id='home'>
                <header>
                    <h1 className='home-name'>USMAN ALI</h1>
                    <p className='home-quote'>Being busy in what you like is indeed an entertainment.</p>
                    <hr className='home-light' />
                </header>
                 <div className="home-pics">
                        <div className='croson'></div>
                        <div className='laptop'></div>
                        <div className='cup'></div>
                </div>
            </div>
        )
    }
}

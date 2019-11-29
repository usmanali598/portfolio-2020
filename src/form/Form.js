import React, { Component } from 'react'
import '../index.css';
import {
    FaSpaceShuttle
  } from "react-icons/fa";

export default class Form extends Component {
    render() {
        const styr = {
            display: 'flex',
            flexDirection:'column',
            width: '100%',
            height: '500px',
            background: '#FAD663',
            outline: '2px solid black',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19)'            
        }
        return (
            <div>
                 <div style={styr}>
                 <input type='text' placeholder='Email' className='email'/>  
                    <textarea placeholder='Message' className='msg' /> 
                    <button className='sendBut'>Send <span className='shutle'><FaSpaceShuttle /></span></button>     
                </div>
            </div>
        )
    }
}

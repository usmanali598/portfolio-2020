import React, { Component } from 'react'
import '../index.css';
import {
    FaSpaceShuttle
} from "react-icons/fa";

export default class Form extends Component {

    state = {
        email: '',
        message:''
    }

    emailInput = (event) => {
        // const imel = event.target.value
        this.setState({ email: event.target.value });
        // var tes = document.getElementsByClassName('invis')[0];
        // tes.style.display = 'none';
    }

    messageInput = (event) => {
        const msg = encodeURI(event.target.value);
        this.setState({ message: msg });
        // var tes = document.getElementsByClassName('invis')[0];
        // tes.style.display = 'none';
    }

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
        let emel = this.state.email !== '' ? this.state.email : '';
        let txt = this.state.message !== '' ? this.state.message : '';
        return (
            <div>
                 <div style={styr}>
                    <input type='text' placeholder='Email' className='email' onChange={this.emailInput}/>  
                    <textarea placeholder='Message' className='msg' onChange={this.messageInput} /> 
                    {/* <div className='invisConten'></div> */}
                    {/* <div className='invis'></div> */}
                    <a className='form-send' href={'mailto:usman_pervaiz@live.com&subject=portfoilio%20message&body=' + txt + '%0AFrom%20'+emel } target="_top">
                        <button className='sendBut' onClick={this.shipText}>
                        Send
                    <span className='shutle'><FaSpaceShuttle /></span></button></a>    
                </div>
            </div>
        )
    }
}

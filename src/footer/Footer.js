import React, { Component } from 'react'
import { FiLinkedin, FiGithub, FiCodepen, FiMail } from "react-icons/fi";

import '../index.css';
export default class Footer extends Component {
    render() {
        return (
            <div className='foot-cont' id='footer'>
                <div className="fo-box">
                    <div className="botom-text">
                        <h3 className='fo-title'>LOCATION</h3>
                        <p className='fo-text'>Helsinki, Finland</p>
                    </div>
                </div>
                <div className="fo-box">
                    <div className="botom-text">
                        <h3 className='fo-title'>OVER THE INTERNET</h3>
                            <ul className='fo-ulist'>
                                <li>
                                    <a href="https://www.linkedin.com/in/usman-ali-a46b7611b/" className='fo-links'>
                                        <FiLinkedin />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/usmanali598" className='fo-links'>
                                        <FiGithub />
                                    </a>
                            </li>
                                    <li>
                                    <a href="https://codepen.io/usmanali958" className='fo-links'>
                                        <FiCodepen />
                                    </a>  
                                    </li>      
                            </ul>
                    </div>
                </div>
                <div className="fo-box">
                    <div className="botom-text">
                        <h3 className='fo-title'>CONTACT INFO</h3>
                        <ul className='fo-ulist'>
                                <li>
                                    <a href="mailto:usman_pervaiz@live.com" className='fo-links'>
                                        <FiMail />
                                    </a>
                                </li>
                            
                            </ul>
                    </div>
                </div>
                <div className="fo-botom">
                    <div className="inlow">
                        Created by Usman Ali &copy; 2019
                    </div>
                </div>
        </div>
        )
    }
}

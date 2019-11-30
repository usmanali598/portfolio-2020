import React from 'react';
import { FiCamera, FiCode, FiImage } from "react-icons/fi";
import '../index.css';

  const Tehtava = (props) => {
    return (
        <div className='cont-ener' id='tehtava'>
            
            <div className="box">
                <div className="pic"><FiCamera style={{ color: '#2a14ccd6', fontSize: '80px', margin: 'auto', textShadow: '2px 2px 8px #FF0000' }} /></div>
                <div className="botom-text">
                    <h3 className='tit-le'>PHOTOGRAPHY</h3>
                    <p className='teh-text'>I love photography to lock the memories of special events with me. 
                        Playing with images and videos help me to improve my editing skills and
                        make more space for new lessons to come in. </p>
                </div>
            </div>
            <div className="box">
                <div className="pic"><FiCode style={{ color: 'green', fontSize: '80px', margin: 'auto' }} /></div>
                <div className="botom-text">
                    <h3 className='tit-le'>DEVELOPMENT</h3>
                    <p className='teh-text'>I work closely with the designer at my workplace. I do mostly code in my dailylife
                       and its hard to get rid rid of thinking something else than coding at the moment. 
                    </p>
                </div>
            </div>
            <div className="box">
                <div className="pic"><FiImage style={{ color: '#163d65', fontSize: '80px', margin: 'auto' }} /></div>
                <div className="botom-text">
                    <h3 className='tit-le'>DESIGN</h3>
                    <p className='teh-text'>I mostly do development. However, I have taken some courses in design
                       as well as I love to play with graphics. It is my hobby to design apps as well as sketching differnet
                       objects. 
                    </p>
                </div>
            </div>
      </div>
    );
  };

export default Tehtava;
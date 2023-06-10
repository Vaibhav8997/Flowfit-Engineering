import React from 'react'
import './Contact.scss';
import {ImLocation2} from 'react-icons/im';
import {MdCall} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import {SiGmail} from 'react-icons/si';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="address">
          <div className="factory">
            <h2>Factory Address:</h2>
            <div className="points">
              <div className="icon"><ImLocation2 style={{fontSize: '18px', color: '#1b8287'}}/></div>
              <div className="point">
                FFE, FlowFit Engineering,
                W-A-1, Om Sai Commercial Complex,
                Goddev Fatak Road, Near HP Gas Godown, Bhayander (E),
                Thane - 401105.
              </div>
            </div>
            <div className="points">
              <div className="icon"><BsWhatsapp style={{fontSize: '18px', color: '#1b8287'}}/></div>
              <div className="point">
                +91 8104604541 - - 
                <a href="https://api.whatsapp.com/send?phone=918104604541" target="_blank" rel='noreferrer' className='link' style={{color:'#1b8287', fontWeight:'600'}}> Send a message</a>
              </div>
            </div>
            <div className="points">
              <div className="icon"><SiGmail style={{fontSize: '18px', color: '#1b8287'}}/></div>
              <div className="point">
                <a href="mailto:Flowfit17755@gmail.com" target="_blank" rel='noreferrer' className='link'>Flowfit17755@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="office">
            <h2>Office Address:</h2>
              <div className="points">
                <div className="icon"><ImLocation2 style={{fontSize: '18px', color: '#1b8287'}}/></div>
                <div className="point">
                  FFE, FlowFit Engineering,
                  W-A-1, Om Sai Commercial Complex,
                  Goddev Fatak Road, Near HP Gas Godown, Bhayander (E),
                  Thane - 401105.
                </div>
              </div>
              <div className="points">
                <div className="icon"><MdCall style={{fontSize: '18px', color: '#1b8287'}}/></div>
                <div className="point">
                  +91 8655295685 - - 
                  <a href="tel: +91 8655295685" className='link' style={{color:'#1b8287', fontWeight:'600'}}> Call Me</a>
                </div>
              </div>
              <div className="points">
                <div className="icon"><SiGmail style={{fontSize: '18px', color: '#1b8287'}}/></div>
                <div className="point">
                  <p><a href="mailto:Flowfit17755@gmail.com" target="_blank" rel='noreferrer' className='link'>Flowfit17755@gmail.com</a></p>
                </div>
               </div>
          </div>
        </div>
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941.3973299983826!2d72.85940096955918!3d19.300217564606534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b031b4283155%3A0x6d1d3c8a8a15dc5c!2sOmsai%20Commercial%20Complex!5e0!3m2!1sen!2sin!4v1686307631195!5m2!1sen!2sin" width="1000" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact
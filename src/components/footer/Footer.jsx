import React from 'react'
import {ImLocation2} from 'react-icons/im';
import {IoIosCall} from 'react-icons/io';
import {HiOutlineMail} from 'react-icons/hi';
import {FaFacebook} from 'react-icons/fa';
import {AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin, AiFillHeart} from 'react-icons/ai';
import './Footer.scss'
import { Link } from 'react-router-dom';

const Footer = () => {
  const style = {
    height: '20px',
    width: '20px',
    color: 'white'
  }
  return (
    <div className="footer">
      
        <div className="pre-footer">
          <div className="item">
            <div className='item-icon'>
              <ImLocation2 style={style}/>
              <h2>Head Office</h2>
            </div>
            <p>
              W-A-1 Om Sai Commercial Complex, Goddev Fatak Road, 
              Near HP Gas Godown, Bhayandar (E), Thane - 401105
            </p>
          </div>
          <div className="item">
            <div className='item-icon'>
              <IoIosCall style={style}/>
              <h2>Call Us</h2>
            </div>
            <p>Office: +91 81046 04541</p>
          </div>
          <div className="item">
            <div className='item-icon'> 
              <HiOutlineMail style={style}/>
              <h2>Email</h2>
            </div>
            <p>Flowfit17755@gmail.com</p>
          </div>
        </div>
        <div className="top">
          <div className="desc">
            <img src="/img/flowfit.jpeg" alt="" />
            <p>Flowfit Engineering follows strict quality control procedure and our experience personals are well versed. In the technical procedure of the home and overseas market. Competitive prices and timely delivery of the product are our main forte.</p>
            <div className="social-links">
              <div className="link">
                <Link className='link'>
                  <FaFacebook />
                </Link>
              </div>
              <Link className='link'>
                <AiFillTwitterCircle />
              </Link>
              <Link className='link'>
                <AiFillInstagram />
              </Link>
              <Link className='link'>
                <AiFillLinkedin />
              </Link>
            </div>
          </div>
          <div className="quick-links">
            <h2>Quick Links</h2>
            <p>Home</p>
            <p>About Us</p>
            <p>Services</p>
            <p>Team</p>
            <p>Contact Us</p>
          </div>
          <div className="products">
            <h2>Our Products</h2>
            <p>Ball Valve</p>
            <p>Needle Valve</p>
            <p>Check Valve</p>
            <p>Manifold Valve</p>
            <p>Thermo Valve</p>
          </div>
        </div>
        
        <div className="bottom">
          <div className="container">
            <div className="copyright">
              Copyright © 2023 FFE, Flowfit Engineering. All rights reserved.
            </div>
            <div className="company">
              <hr />
              Made with <AiFillHeart style={{color: 'red'}}/> <Link to='https://www.linkedin.com/in/kishan-chauhan-a7420a212/' className='link'>Kishan Chauhan</Link>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Footer;
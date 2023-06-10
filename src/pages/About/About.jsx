import React from 'react'
import './About.scss'
import {FaFeatherAlt} from 'react-icons/fa'

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="first">
          <h1>ABOUT FLOWFIT ENGINEERING, FFE.</h1>
          <p className="title">Flexible Hose Pipe Assemblies, Camlock Couplings, Compression Fittings, Brass & SS Valves, Brass & SS Pipe Fitting Automotive Fitting (CNC & BMC). </p>
          <p>Flowfit was incepted in 2000 in Mumbai (India), with a vision to cater the needs of companies within Gas (PNG & CNG) and Automotive Industries. Today we are recognized as one of the foremost manufacturer and supplier of superior quality Flexible Hose Pipe Assemblies, Camlock Couplings, Compression Fittings, Brass & SS Valves, Brass & SS Pipe Fitting Automotive Fitting (CNC & BMC) in Indian domain market with the latest in-house machinery and infrastructure under one roof, we manufacture a wide range of products in different sized and metals like brass, stainless steel, mild steel, copper etc. according to customer's need. We are committed to manufacture or products in a safe working environment with the help of skilled manpower.</p>
          <p className='extra'>We understand & incorporate the feedbacks / recommendations to meet customer's quality product standard requirement time to time.</p>
          <p className='extra'>Mr. Zulfekar Ahmed, the CEO whose vast experience, capablities & guidance has made us prominent in the field.</p>
        </div>
        <div className="second">
          <div className="image">
            <img src="/img/emp.jpg" alt="" />
          </div>
          <div className="points">
            <h2>VISION & MISSION</h2>
            <p>FLOWFIT ENGINEERING is commited to excell quality products in the field of fluid transfer system accessorise, fittings & valves by achieving its goal of total customer satisfaction by:</p>
            <p><FaFeatherAlt /> Understanding and anticipating the needs of customers.</p>
            <p><FaFeatherAlt /> Expanding our knowledge base and improving workforce through training, research, development and innovation. </p>
            <p><FaFeatherAlt /> Establishing and maintaining total quality management system as per various internationally accepted standards and thereny producing and marketing high quality products at competitive rates in order to meet and exceed the expectation of customers.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
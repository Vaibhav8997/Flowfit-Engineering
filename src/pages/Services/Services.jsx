import React from 'react'
import './Services.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import {FaFeatherAlt} from 'react-icons/fa'

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <Sidebar />
        <div className="service">
          <h1>SERVICES</h1>
          <div className="first">
            <p>Working with a goal of achieving maximum client satisfaction by giving best services has helped us in retaining our long list of clientèle. The unsurpassed quality of our range makes our clients to make business deals with us. We also maintain a regular communication system with our clients, which enables us to gather feedback from the clients. Our ability to meet specific requirements of our clients has gained us prominence in the market. Maintaining transparency in our business dealings and ensuring prompt deliveries, we are catering to a wide client base.</p>
            <p>We are a renowned manufacturer, stockist and exporter of Pipes and Tube Fittings, Industrial Components, Pneumatic Products and Measuring Instruments. We believe in gathering new clientèle through the word of mouth of our existing clientèle. Some of the factors that have kept us ahead of our competitors are as follows:</p>
          </div>
          <div className="second">
            <div className="data">
              <h3>WORK SCOPE</h3>
              <p>We are a renowned manufacturer, stockist and exporter of Pipes and Tube Fittings, Industrial Components, Pneumatic Products and Measuring Instruments. We believe in gathering new clientèle through the word of mouth of our existing clientèle. Some of the factors that have kept us ahead of our competitors are as follows:</p>
              <p className='point'><FaFeatherAlt />Financial Responsibility to Our Clients </p>
              <p className='point'><FaFeatherAlt />Superior Quality and Craftsmanship  </p>
              <p className='point'><FaFeatherAlt />Quality and Value to the Projects We Deliver  </p>
              <p className='point'><FaFeatherAlt />Highest Standards in Cost Control  </p>
            </div>
            <div className="image">
              <img src="/img/emp.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
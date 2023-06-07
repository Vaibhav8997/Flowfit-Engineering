import './FlairConnector.scss';
import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import { flairConnector } from '../../data';
import ProductCard from '../../components/productCard/ProductCard';

const FlairConnector = () => {
    const[showProduct, setShowProduct] = useState(true);
    return (
      <div className="main">
          <div className="container">
              <Sidebar />
              <div className="content-section">
                <h1>Flair Connector</h1>
                {
                  showProduct === true ? (
                    <>
                      <button className='btn-view' onClick={() => setShowProduct(false)}>View Product</button>
                      <div className="product-content">
                        {
                          flairConnector.map(card => {
                            return <ProductCard key={card.id} item={card}/>
                          })
                        }
                      </div>
                    </>
                  ):(
                    <div className="content">
                      <div className="left">
                        <p className='title'>Flare Connectors are available in a wide range of materials, sizes, connections and configurations.</p>
                        <p>FFE Parker's flare fittings provide reliable leak-free connections for high-pressure fluid and gas applications. Flare fittings are offered in 37° flare, 45° flare, and 90° flare (O-ring Face Seal) series that are designed to maximize the leak-free performance and service life of your hydraulic connections. </p>
                      </div>
                      <div className="right">  
                        <img src="/img/flair-connector.jpg" alt="" />
                        <button className='btn-view' onClick={() => setShowProduct(true)}>View All Products</button>
                      </div>
                    </div>
                  )
                } 
              </div>
          </div>
      </div>
    )
}

export default FlairConnector
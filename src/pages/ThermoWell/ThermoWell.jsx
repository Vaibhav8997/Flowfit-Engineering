import React, { useState } from 'react'
import './ThermoWell.scss'
import { thermoWell } from '../../data';
import Sidebar from '../../components/sidebar/Sidebar';
import ProductCard from '../../components/productCard/ProductCard';

const ThermoWell = () => {
    const[showProduct, setShowProduct] = useState(true);
    return (
      <div className="main">
          <div className="container">
              <Sidebar />
              <div className="content-section">
                <h1>Thermo Well</h1>
                {
                  showProduct === true ? (
                    <>
                      <button className='btn-view' onClick={() => setShowProduct(false)}>View Product</button>
                      <div className="product-content">
                        {
                          thermoWell.map(card => {
                            return <ProductCard key={card.id} item={card}/>
                          })
                        }
                      </div>
                    </>
                  ):(
                    <div className="content">
                      <div className="left">
                        <p className='title'>Thermowell are available in a wide range of materials, sizes, connections and configurations.</p>
                        <p>FFE Thermowell Series feature threaded, flanged, socket weld, weld-in, Van Stone, limited space and sanitary styles. Custom designs and modifications to standard models are available.</p>
                      </div>
                      <div className="right">  
                        <img src="/img/thermo-well.jpg" alt="" />
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

export default ThermoWell
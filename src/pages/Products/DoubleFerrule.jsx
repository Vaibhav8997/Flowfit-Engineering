import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import { tubeFitting } from '../../data';
import './Products.scss';
import ProductCard from '../../components/productCard/ProductCard';

const DoubleFerrule = () => {
  const[showProduct, setShowProduct] = useState(true);
  return (
    <div className="main">
        <div className="container">
            <Sidebar />
            <div className="content-section">
              <h1>Double Ferrule and Tube Fittings</h1>
              {
                showProduct === true ? (
                  <>
                    <button className='btn-view' onClick={() => setShowProduct(false)}>View Product</button>
                    <div className="product-content">
                      {
                        tubeFitting.map(card => {
                          return <ProductCard key={card.id} item={card}/>
                        })
                      }
                    </div>
                  </>
                ):(
                  <div className="content">
                    <div className="left">
                      <p className='title'>Double Ferrule Tube Fittings are available in a wide range of materials, sizes, connections and configurations.</p>
                      <p>FFE Double Ferrule Tube Fittings provide leak proof torque free seals at all tubing connections. They eliminate hazardous leaks in instrumentation, process, pneumatic, hydraulic, gas and other applicable tubing systems which could otherwise turn out to be costly to the installation.</p>
                    </div>
                    <div className="right">  
                      <img src="/img/double-ferrule-fittings.webp" alt="" />
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

export default DoubleFerrule
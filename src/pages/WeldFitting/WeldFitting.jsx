import './WeldFitting.scss'
import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import { weldFitting } from '../../data';
import ProductCard from '../../components/productCard/ProductCard';

const WeldFitting = () => {
    const[showProduct, setShowProduct] = useState(true);
    return (
      <div className="main">
          <div className="container">
              <Sidebar />
              <div className="content-section">
                <h1>Weld Fitting</h1>
                {
                  showProduct === true ? (
                    <>
                      <button className='btn-view' onClick={() => setShowProduct(false)}>View Product</button>
                      <div className="product-content">
                        {
                            weldFitting.map(card => {
                            return <ProductCard key={card.id} item={card}/>
                          })
                        }
                      </div>
                    </>
                  ):(
                    <div className="content">
                      <div className="left">
                        <p className='title'>Weld Fitting are available in a wide range of materials, sizes, connections and configurations.</p>
                        <p>FFE offers a comprehensive range of weld fittings with different configurations such as straight weld nipples, elbows, reducers or directionally adjustable weld nipple fittings with O-ring seal. Product range: Series L/S from 6 to 42 mm tube outer diameter. Material: stainless steel. Nominal pressure PN: max. 630 bar </p>
                      </div>
                      <div className="right">  
                        <img src="/img/weld-fitting.jpg" alt="" />
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

export default WeldFitting
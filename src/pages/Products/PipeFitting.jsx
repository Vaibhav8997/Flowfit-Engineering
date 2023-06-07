import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import { pipeFitting } from '../../data';
import './Products.scss';
import ProductCard from '../../components/productCard/ProductCard';

const PipeFitting = () => {
    const[showProduct, setShowProduct] = useState(true);
    return (
        <div className="main">
            <div className="container">
                <Sidebar />
                <div className="content-section">
                <h1>Pipe Fittings</h1>
                {
                    showProduct === true ? (
                    <>
                        <button className='btn-view' onClick={() => setShowProduct(false)}>View Product</button>
                        <div className="product-content">
                        {
                            pipeFitting.map(card => {
                            return <ProductCard key={card.id} item={card}/>
                            })
                        }
                        </div>
                    </>
                    ):(
                    <div className="content">
                        <div className="left">
                        <p className='title'>Pipe Fittings are available in a wide range of materials, sizes, connections and configurations.</p>
                        <p>FFE pipe fittings are available in a variety of sizes, materials and configurations. Our range includes pipe connectors and pipe and port adapters that are also available in a wide array of thread types. They are designed to provide leak-free connections and are suitable for use across a variety of applications that support many of today's major industrial markets. </p>
                        </div>
                        <div className="right">  
                        <img src="/img/pipe-fitting.jpg" alt="" />
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

export default PipeFitting
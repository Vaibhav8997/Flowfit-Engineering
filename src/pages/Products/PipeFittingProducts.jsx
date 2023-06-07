import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import ProductDetail from '../../components/productDetail/ProductDetail'
import { pipeFitting } from '../../data'
import { useParams } from 'react-router-dom'
import './AllProducts.scss';

const PipeFittingProducts = () => {
    const {id} = useParams();
    
    let data = {}
    pipeFitting.filter(obj => {
        if(String(obj.id) === id){
            data = obj;
        }
    })
    let image = data.img;
    console.log(data.imageURL);

    return (
        <div className="doubleferrule">
            
            <div className="container">
                <Sidebar />

                <div className="content-section">
                    <h1>Double Ferrule and Tube Fittings</h1>
                    <div className="product-details">
                        <div className="img-product">
                            <img src={data.imageURL} alt="" />
                            <p>{data.title}</p>
                        </div>
                        {
                            image.map(data => {
                                return <ProductDetail item={data}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PipeFittingProducts
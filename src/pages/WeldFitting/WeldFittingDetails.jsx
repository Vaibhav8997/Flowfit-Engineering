import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import ProductDetail from '../../components/productDetail/ProductDetail'
import { weldFitting } from '../../data'
import { useParams } from 'react-router-dom'
import './WeldFittingDetails.scss'

const WeldFittingDetails = () => {
    const {id} = useParams();
    
    let data = {}
    weldFitting.filter(obj => {
        if(String(obj.id) === id){
            data = obj;
        }
    })
    let image = data.img;

    return (
        <div className="flairConnector">
            
            <div className="container">
                <Sidebar />

                <div className="content-section">
                    <h1>Flair Connector</h1>
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

export default WeldFittingDetails
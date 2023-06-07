import React from 'react'
import { thermoWell } from '../../data';
import Sidebar from '../../components/sidebar/Sidebar';
import ProductDetail from '../../components/productDetail/ProductDetail';
import { useParams } from 'react-router-dom';
import './ThermowellDetails.scss';

const ThermowellDetails = () => {
    const {id} = useParams();
    
    let data = {}
    thermoWell.filter(obj => {
        if(String(obj.id) === id){
            data = obj;
        }
    })
    let image = data.img;

    return (
        <div className="thermowell">
            
            <div className="container">
                <Sidebar />

                <div className="content-section">
                    <h1>Thermo Well</h1>
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

export default ThermowellDetails
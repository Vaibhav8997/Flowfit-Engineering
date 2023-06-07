import React from 'react'
import './CheckValveDetails.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import { useParams } from 'react-router-dom';
import { checkValve, checkValveFeatures } from '../../data';
import ProductDetail from '../../components/productDetail/ProductDetail';
import {FaFeatherAlt} from 'react-icons/fa'

const CheckValveDetails = () => {
    const{id} = useParams();
    let data = {};
    let feature = {};
    let orifice = '';
    let cyFactor = '';
    let temperature = {};
    let pressure = {};
    let pressureTemperature = {};
    checkValve.filter(obj => {
        if(String(obj.id) === id){
            data = obj;
        }
    })
    let image = data.img;

    checkValveFeatures.map(data => {
        feature = data.features;
        orifice = data.orifice;
        cyFactor = data.cyFactor;
        pressureTemperature = data.pressureTemperature;
    })


    pressureTemperature.map(data => {
        pressure = data.pressure;
        temperature = data.temperature;
    })

    
    return (
        <div className="checkValveDetails">
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
                    <div className="features">
                        <h1>Features:</h1>
                        {
                            feature.map(data => {
                                return <p><FaFeatherAlt style={{color: '#1b8287'}}/>{data.point}</p>
                            })
                        }
                    </div>
                    <div className="orifice">
                        <h1>Orifice:</h1>
                        <p><FaFeatherAlt style={{color: '#1b8287'}}/> {orifice} </p>
                    </div>
                    <div className="cyfactor">
                        <h1>CY Factor:</h1>
                        <p><FaFeatherAlt style={{color: '#1b8287'}}/> {cyFactor} </p>
                    </div>
                    <div className="pressure">
                        <h1>Pressure / Temperature Ratings:</h1>
                        <p className='title'>Pressure Rating:</p>
                        {
                            pressure.map(data => {
                                return <p><FaFeatherAlt style={{color: '#1b8287'}}/>{data.point}</p>
                            })
                        }
                        <p className='title'>Working Temperatures:</p>
                        {
                            temperature.map(data => {
                                return <p><FaFeatherAlt style={{color: '#1b8287'}}/>{data.point}</p>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckValveDetails
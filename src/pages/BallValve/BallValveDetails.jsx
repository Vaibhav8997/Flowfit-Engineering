import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { useParams } from 'react-router-dom';
import { ballValve, ballValveFeatures } from '../../data';
import ProductDetail from '../../components/productDetail/ProductDetail';
import {FaFeatherAlt} from 'react-icons/fa'
import './BallValveDetails.scss'

const BallValveDetails = () => {
    const {type} = useParams();
    const {id} = useParams();
    let head = '';
    type === '2way' ? head = '2' : head = '3';
    let data = {}
    ballValve.filter(obj => {
        if(String(obj.id) === id){
            data = obj;
        }
    })
    let image = data.img;
    return (
        <div className="ballValveDetails">
            <div className="container">
                <Sidebar />
                <div className="products">
                    <h1>{head} Way ball Valve</h1>
                    <div className="product">
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
                        {
                            ballValveFeatures.map(data => {
                                return <>
                                <div>
                                <FaFeatherAlt style={{color: '#1b8287'}}/>
                                <p>{data.title}{data.point}</p>
                                </div>
                                </>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BallValveDetails
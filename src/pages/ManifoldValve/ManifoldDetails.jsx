import React from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar';
import { manifoldValve } from '../../data';
import ProductDetail from '../../components/productDetail/ProductDetail';
import './ManifoldDetails.scss'

const ManifoldDetails = () => {
    const {id} = useParams();

    let data = {}
    manifoldValve.filter(obj => {
        if(String(obj.id) === id){
            data = obj;
        }
    })
    let image = data.img;
  return (
    <div className="manifoldDetails">
        <div className="container">
            <Sidebar />
            <div className="content-section">
                <h1>{data.title}</h1>
                <div className="product-details">
                    <div className="img-product">
                        <img className='manifold-img' src={data.imageURL} alt="" />
                    </div>
                    {
                        image.map(data => {
                            return <ProductDetail item={data}/>
                        })
                    }
                    <p className='features'>{data.features}</p>
                    <p className='features2'>{data.features2}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ManifoldDetails
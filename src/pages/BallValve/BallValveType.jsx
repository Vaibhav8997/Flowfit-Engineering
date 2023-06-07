import React from 'react'
import './BallValveType.scss';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import { ballValve } from '../../data';
import ProductCard from '../../components/productCard/ProductCard';

const BallValveType = () => {
    const {type} = useParams();
    let head = '';
    type === '2way' ? head = '2' : head = '3';
    return (
        <div className="ballValveType">
            <div className="container">
                <Sidebar />
                <div className="products">
                    <h1>{head} Way ball Valve</h1>
                    <div className="product">
                    {
                        ballValve.map(data => {
                            if(data.URL1 === type){
                                return <ProductCard key={data.id} item={data} />
                            }
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BallValveType
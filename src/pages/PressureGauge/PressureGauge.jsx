import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import './PressureGauge.scss';
import { pressureGauge } from '../../data';
import ProductCard from '../../components/productCard/ProductCard'

const PressureGauge = () => {
  return (
    <div className="pressureGauge">
        <div className="container">
            <Sidebar />
            <div className="right">
                <h1>Pressure Gauge Accessories </h1>
                <div className="products">

                {
                    pressureGauge.map(data => {
                        return <ProductCard key={data.id} item={data}/>
                    })
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default PressureGauge
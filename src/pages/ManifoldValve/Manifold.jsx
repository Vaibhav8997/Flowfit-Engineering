import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { manifoldValve } from '../../data'
import ProductCard from '../../components/productCard/ProductCard'
import './Manifold.scss'

const Manifold = () => {
  return (
    <div className="manifoldValve">
        <div className="container">
            <Sidebar />
            <div className="content">
                <h1>Manifold Valve</h1>
                <h3>Manifold Valves are available in a wide range of materials, sizes, connections and configurations.</h3>
                <p>FFE Manifold have been engineered for use at pressure up to 6,000psi(414 bar) and temperature as high as 1,000°F (538 °C). Perform various tasks and functions while reduce installation costs and improve safety performance. </p>
                <div className="products">

                {
                    manifoldValve.map(data => {
                        return <ProductCard key={data.id} item={data}/>
                    })
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Manifold
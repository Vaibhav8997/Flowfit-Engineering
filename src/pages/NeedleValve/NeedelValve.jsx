import React from 'react'
import './NeedleValve.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import { needleValve } from '../../data';
import ProductCard from '../../components/productCard/ProductCard';


const NeedelValve = () => {
  return (
    <div className="needleValve">
        <div className="container">
            <Sidebar />
            <div className="needles">
                <h1 className='head'>Needle Valve</h1>
                <p className='desc'>Needle Valves are available in a wide range of materials, sizes, connections and configurations.</p>
                <p>FFE offers needle valves for positive leak-tight shut-off and regulation of liquids and gases, in a variety of stem types, in both in-line and angle patterns. Several designs are provided for oil and gas processing facilities, along with a PFA product for use in aggressive chemical and gas applications. </p>
                <div className='cards'>
                {
                    needleValve.map(data => {
                        return <ProductCard key={data.id} item={data}/>
                    })
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default NeedelValve
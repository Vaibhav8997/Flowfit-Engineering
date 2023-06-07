import React from 'react'
import './CheckValve.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import { checkValve } from '../../data';
import ProductCard from '../../components/productCard/ProductCard';

const CheckValve = () => {
  return (
    <div className="checkValve">
        <div className="container">
            <Sidebar /> 
            <div className="products">
                <h1>Check Valve</h1>
                <p className="title">Check Valves are available in a wide range of materials, sizes, connections and configurations.</p>
                <p>FFE Check Valves are specially designed & manufactured for flow control of fluids and gases in corrosive & hazardous environment. These valves are used in Process control, instrumentation and flow control applications. Valves are precision machined with designer durability and maximum efficiency to provide high quality and low cost alternatives in fluid and gaseous control systems of different applications, to meet the exact standards of our customers growing demands.</p>
                <div className="product">
                    {
                        checkValve.map(data=> {
                            return <ProductCard key={data.id} item={data}/>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckValve
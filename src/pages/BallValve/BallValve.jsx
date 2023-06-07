import React from 'react'
import './BallValve.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import { Link } from 'react-router-dom';

const BallValve = () => {
  return (
    <div className="ballValve">
        <div className="container">
            <Sidebar />
            <div className="content">
                <div className="desc">
                    <h1>Ball Valve</h1>
                    <p className="title">Ball Valves are available in a wide range of materials, sizes, connections and configurations.</p>
                    <p>FFE supplies a comprehensive range of ball valves that control flow direction and support a diverse range of system requirements. Our ball valves are both reliable and economical when it comes to service and are available in various configurations and options. Within our ball valve range we have a range of different function capabilities and you can also choose from a selection of product materials to meet your requirements. We also have an impressive choice of seat and seal materials available.</p>
                </div>

                <div className="products">
                    <div className="product">
                        <div className="image">
                            <img src="/img/2-way-ball-valve.jpg" alt="" />
                            <p>2 Way Ball Valve</p>
                        </div>
                        <Link className='link' to='/ballvalve/2way'>
                            <button className='btn-details'>View Details</button>
                        </Link>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src="/img/3-way-ball-valve.jpg" alt="" />
                            <p>3 Way Ball Valve</p>
                        </div>
                        <Link className='link' to='/ballvalve/3way'>
                            <button className='btn-details'>View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BallValve
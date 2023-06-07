import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.scss';
import {FaFeatherAlt} from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className="sidebar">
        
            <div className="menu-section">
                <Link className='link' to='/doubleferrule'>
                    <div className="menu-item">
                        <FaFeatherAlt />&nbsp;Double Ferrule and Tube Fittings
                    </div>
                </Link>
                <Link className='link' to='/pipefitting'>
                    <div className="menu-item">
                        <FaFeatherAlt />&nbsp; Pipe Fittings
                    </div>
                </Link>
                <Link className='link' to='/needleValve'>
                    <div className="menu-item">
                        <FaFeatherAlt />&nbsp;Needle Valves
                    </div>
                </Link>
                <Link className='link' to='/manifoldValve'>
                    <div className="menu-item">
                        <FaFeatherAlt />&nbsp;Manifold Valves
                    </div>
                </Link>
                <Link className='link' to='/thermowell'>
                    <div className="menu-item">
                        <FaFeatherAlt />&nbsp;Thermo Wells
                    </div>
                </Link>
                <Link className='link' to='/checkValve'>
                    <div className="menu-item">
                        <FaFeatherAlt />&nbsp;Check Valves
                    </div>
                </Link>
                <Link className='link' to='/pressureGauge'>
                    <div className="menu-item">
                        <FaFeatherAlt />&nbsp;Pressure Gauge
                    </div>
                </Link>
                <Link className='link' to='/ballvalve'>
                    <div className="menu-item">
                        <FaFeatherAlt />&nbsp;Ball Valve
                    </div>
                </Link>
                <Link className='link' to='/flairconnector'>
                    <div className="menu-item">
                        <FaFeatherAlt />&nbsp;Flair Connector
                    </div>
                </Link>
                <Link className='link' to='/weldfitting'>
                    <div className="menu-item">
                        <FaFeatherAlt />&nbsp;Weild Fitting
                    </div>
                </Link>
            </div>
        
    </div>
  )
}

export default Sidebar
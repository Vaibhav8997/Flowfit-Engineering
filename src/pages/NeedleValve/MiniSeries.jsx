import React from 'react'
import { hbSeries, hpSeries, ibseries, miniSeries, sbSeries } from '../../data'
import Sidebar from '../../components/sidebar/Sidebar'
import ProductCard from '../../components/productCard/ProductCard'
import './Series.scss';
import { useParams } from 'react-router-dom';

const MiniSeries = () => {
    const url = useParams();
    return (
        <div className="Series">
            <div className="container">
                <Sidebar />
                <div className="content">
                    <h1>Needle Valve</h1>
                    {url.series === 'mini-series' && 
                    <>
                        <h2>Mini Series</h2>
                        <div className="prod">
                            {
                                miniSeries.map(data => {
                                    return <ProductCard key={data.id} item={data}/>
                                })
                            }
                        </div>
                    </>
                    }
                    {url.series === 'ib-series' && 
                    <>
                        <h2>IB Series</h2>
                        <div className="prod">
                            {
                                ibseries.map(data => {
                                    return <ProductCard key={data.id} item={data}/>
                                })
                            }
                        </div>
                    </>
                    }
                    {url.series === 'hb-series' && 
                    <>
                        <h2>HB Series</h2>
                        <div className="prod">
                            {
                                hbSeries.map(data => {
                                    return <ProductCard key={data.id} item={data}/>
                                })
                            }
                        </div>
                    </>
                    }
                    {url.series === 'sb-series' && 
                    <>
                        <h2>SB Series</h2>
                        <div className="prod">
                            {
                                sbSeries.map(data => {
                                    return <ProductCard key={data.id} item={data}/>
                                })
                            }
                        </div>
                    </>
                    }
                    {url.series === 'hp-series' && 
                    <>
                        <h2>HP Series</h2>
                        <div className="prod">
                            {
                                hpSeries.map(data => {
                                    return <ProductCard key={data.id} item={data}/>
                                })
                            }
                        </div>
                    </>
                    }
                </div>
            </div>
        </div>
    )
}

export default MiniSeries
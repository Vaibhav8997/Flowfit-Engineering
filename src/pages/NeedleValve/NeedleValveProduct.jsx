import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { ibseries, miniSeries, miniSeriesFeatures, ibSeriesFeatures, hbSeries, hbSeriesFeatures, sbSeries, sbSeriesFeatures, hpSeries, hpSeriesFeatures } from '../../data'
import { useParams } from 'react-router-dom'
import ProductDetail from '../../components/productDetail/ProductDetail'
import {FaFeatherAlt} from 'react-icons/fa'
import './NeedleProduct.scss';

const NeedleValveProduct = () => {
    const url = useParams();
    let data = {}
    
    if(url.series === 'mini-series'){
        miniSeries.filter(obj => {
            if(String(obj.id) === url.id){
                data = obj;
            }
        })
    }

    if(url.series === 'ib-series'){
        ibseries.filter(obj => {
            if(String(obj.id) === url.id){
                data = obj;
            }
        })
    }

    if(url.series === 'hb-series'){
        hbSeries.filter(obj => {
            if(String(obj.id) === url.id){
                data = obj;
            }
        })
    }
    if(url.series === 'sb-series'){
        sbSeries.filter(obj => {
            if(String(obj.id) === url.id){
                data = obj;
            }
        })
    }
    if(url.series === 'hp-series'){
        hpSeries.filter(obj => {
            if(String(obj.id) === url.id){
                data = obj;
            }
        })
    }
    let image = data.img;

    return (
        <div className="needlevalveproduct">
            <div className="container">
                <Sidebar />
                <div className="product">
                    <h1>Needle Valve</h1>
                    {
                        url.series === 'mini-series' &&
                        <>
                            <div className="images">
                                <div className="needle-img">
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
                                    miniSeriesFeatures.map(data => {
                                        return (
                                            <p> <FaFeatherAlt style={{color: '#1b8287'}}/> <span>{data.title}</span> {data.point}</p>
                                            )
                                        })
                                }
                            </div>
                        </>
                    }
                    {
                        url.series === 'ib-series' &&
                        <>
                            <div className="images">
                                <div className="needle-img">
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
                                    ibSeriesFeatures.map(data => {
                                        return (
                                            <p> <FaFeatherAlt style={{color: '#1b8287'}}/> <span>{data.title}</span> {data.point}</p>
                                            )
                                        })
                                }
                            </div>
                        </>
                    }
                    {
                        url.series === 'hb-series' &&
                        <>
                            <div className="images">
                                <div className="needle-img">
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
                                    hbSeriesFeatures.map(data => {
                                        return (
                                            <p> <FaFeatherAlt style={{color: '#1b8287'}}/> <span>{data.title}</span> {data.point}</p>
                                            )
                                        })
                                }
                            </div>
                        </>
                    }
                    {
                        url.series === 'sb-series' &&
                        <>
                            <div className="images">
                                <div className="needle-img">
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
                                    sbSeriesFeatures.map(data => {
                                        return (
                                            <p> <FaFeatherAlt style={{color: '#1b8287'}}/> <span>{data.title}</span> {data.point}</p>
                                            )
                                        })
                                }
                            </div>
                        </>
                    }
                    {
                        url.series === 'hp-series' &&
                        <>
                            <div className="images">
                                <div className="needle-img">
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
                                    hpSeriesFeatures.map(data => {
                                    return (
                                        <p> <FaFeatherAlt style={{color: '#1b8287'}}/> <span>{data.title}</span> {data.point}</p>
                                        )
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

export default NeedleValveProduct
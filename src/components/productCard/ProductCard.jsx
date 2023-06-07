import React from 'react'
import './ProductCard.scss';
import { Link } from 'react-router-dom';

const ProductCard = ({item}) => {
  return (
    <Link className='link'>
        <div className="productCard">
          <div className='prd-img'>
            <img src={item.imageURL} alt="" />
            <p className='title'>{item.title}</p>
          </div>
        </div>
        <div className='prd-btn'>
          {
            item.URL && (
              <Link className='link' to={`/${item.URL}/${item.id}`}><button className='btn-view'>View Details</button></Link>
            )
          }
          {
            item.SeriesURL && (
              <Link className='link' to={`/needleValve/${item.SeriesURL}`}><button className='btn-view'>View Details</button></Link>
            )
          }
          {
            item.URL1 && (
              <Link className='link' to={`/ballvalve/${item.URL1}/${item.id}`}><button className='btn-view'>View Details</button></Link>
            )
          }
        </div>
    </Link>
  )
}

export default ProductCard
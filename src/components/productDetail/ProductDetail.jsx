import React from 'react'
import './ProductDetail.scss'

const ProductDetail = ({item}) => {
  return (
    <div className="productDetail">
      <p>{item.title}</p>
      <img className="diagram" src={item.imageURL1} alt="" />
      <img src={item.imageURL} alt="" />
      <img className='mani' src={item.imageMani} alt="" />
    </div>
  )
}

export default ProductDetail
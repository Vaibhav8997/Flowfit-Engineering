import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {products,industries} from '../../data';
import ProductCard from '../../components/productCard/ProductCard.jsx';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <div className="carousel">
          <Carousel>
            <div>
                <img src="/img/carousel1.jpg" />
            </div>
            <div>
                <img src="/img/carousel2.jpg" />
            </div>
            <div>
                <img src="/img/carousel3.jpg" />
            </div>
            <div>
                <img src="/img/carousel4.jpg" />
            </div>
            <div>
                <img src="/img/carousel5.jpg" />
            </div>
          </Carousel>
        </div>

        <div className="products">
          <h1 className='head'>Products</h1>
          <div className='product'>
            {
              products.map(card => {
                return <ProductCard key={card.id} item={card}/>
              })
            }
          </div>
        </div>

        <div className="industries">
          <h1 className='head'>Industries We Serve</h1>
          <div className="industry">
            {
              industries.map(card => {
                return <ProductCard key={card.id} item={card} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
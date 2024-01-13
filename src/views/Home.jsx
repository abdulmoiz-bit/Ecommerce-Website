import React from 'react'
import Products from '../components/Products';
import "./Home.css"
import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';
import homeone from "../assets/images/home-one.jpg"
import hometwo from "../assets/images/home-two.jpg"
import homethree from "../assets/images/home-three.png"
import homefour from "../assets/images/home-four.jpg"
import homefive from "../assets/images/home-five.png"
import homesix from "../assets/images/home-six.png"
import homeseven from "../assets/images/home-seven.jpg"



const Home = () => {
    return (
        <div className="home">
            <div className='gridimages'>
                <figure className='item--1'><img src={homefive} alt="" /></figure>
                <figure className='item--2'><img src={homeseven} alt="" /></figure>
                <figure className='item--3'><img src={homesix} alt="" /></figure>
                <figure className='item--4'><img src={homefour} alt="" /></figure>
                <figure className='item--5'>
                    <Carousel fade>
                        <Carousel.Item>
                            <img src={homeone} alt="" style={{height: "60vh",width: "100%" , objectFit: "cover"}} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={hometwo} alt="" style={{height: "60vh",  width: "100%", objectFit: "cover" }} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={homethree} alt="" style={{ height: "60vh", width: "100%", objectFit: "cover" }} />
                        </Carousel.Item>
                    </Carousel>
                </figure>
            </div>
            <Products />
        </div>
    )
}

export default Home;
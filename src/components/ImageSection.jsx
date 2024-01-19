import React from 'react'
import "./ImageSection.css"
import homeone from "../assets/images/home-one.jpg"
import hometwo from "../assets/images/home-two.jpg"
import homethree from "../assets/images/home-three.png"
import homefour from "../assets/images/home-four.jpg"
import homefive from "../assets/images/home-five.png"
import homesix from "../assets/images/home-six.png"
import homeseven from "../assets/images/home-seven.jpg"

const ImageSection = () => {
  return (
    <div className="home">
      <div className='gridimages'>
       <figure className='item--1'><img src={homefive} alt="" /></figure>
       <figure className='item--2'><img src={homeseven} alt="" /></figure>
       <figure className='item--3'><img src={homeone} alt="" /></figure>
        <figure className='item--4'><img src={homefour} alt="" /></figure>
        <figure className='item--5'><img src={homethree} alt="" /></figure>
      </div>
    </div>
  )
}

export default ImageSection
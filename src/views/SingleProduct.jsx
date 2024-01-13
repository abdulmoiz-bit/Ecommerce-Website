import React from 'react'
import { useParams } from 'react-router-dom';
import DATA from '../Data';
import { addCart } from '../store/action/index';
import { useDispatch } from 'react-redux';
import "./SingleProduct.css"
//import CommentSection from '../components/CommentSection';


const Product = () => {
  //const { id } = useParams();
  const dispatch = useDispatch();
  const productid = useParams();
  const productDetails = DATA.filter(item => item.id == productid.id);
  const product = productDetails[0];
  console.log(product);
  /*
  const addProduct = () => {
     dispatch(addCart(product))
  }
  */

  return (
    <>
      <div className='singleproduct'>
        <div className='singleproduct-image'>
          <img src={product.img} alt={product.title} />
          <div className='single-images'>
            <div className='item-1'><img src={product.img} alt="" style={{height: "50px", width: "50px"}} /></div>
            <div className='item-2'><img src={product.img} alt="" style={{height: "50px", width: "50px"}}/></div>
            <div className='item-3'><img src={product.img} alt="" style={{height: "50px", width: "50px"}}/></div>
            <div className='item-4'><img src={product.img} alt="" style={{height: "50px", width: "50px"}}/></div>
          </div>
        </div>
        <div className='singleproduct-details'>
          <h1>{product.title}</h1>
          <p>{product.desc}</p>
          <button className='btn singleproduct-button' onClick={() => dispatch(addCart(product))}>Add to Cart</button>
        </div>
      </div>



      <div className='comment-section'>
      </div>
    </>
  )
}


export default Product;

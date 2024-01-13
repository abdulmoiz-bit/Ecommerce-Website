import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
import DATA from "../Data"
import "./Products.css"


const Products = () => {

    const [products, setProducts] = useState(DATA)

    return (
        <>
            <div>
                <div style={{marginTop: "4rem"}}>
                    <h1 style={{ textAlign: "center" }}>PRODUCTS</h1>
                </div>

                <div className="grid-products">
                    <div className='category-list'>
                        <p>All </p>
                        <p>Men Clothing </p>
                        <p>Women Clothing </p>
                        <p>Jewelery </p>
                        <p>Electronics </p>
                    </div>

                    <div className="products">
                        {products.map((item) => {
                            return (
                                <div className='card' key={item.id}>
                                    <div className='image-box'>
                                        <img src={item.img} alt={item.title} height="200px" width="200px" />
                                    </div>
                                    <h5 className='text-center'>{item.title.substring(0, 12)}</h5>
                                    <p className='text-center'>${item.price}</p>
                                    <NavLink to={`/product/${item.id}`} className="btn">
                                        View Details
                                    </NavLink>
                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>
        </>
    )
}


export default Products;
import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
import DATA from "../Data"
import "./Products.css"


const Products = () => {

    const [products, setProducts] = useState(DATA)
    const [filter, setFilter] = useState(products)

    const filterProducts = (category) => {
        let filter = products
        if (category === "ALL") {
            setFilter(filter)
        } else {
            filter = products.filter((item) => {
                return item.category === category
            })
            setFilter(filter)
        }
    }

    return (
        <>
                <div style={{marginTop: "4rem"}}>
                    <h1 style={{ textAlign: "center" }}>PRODUCTS</h1>
                </div>

                    <div className='category-list'>
                       <button className="btn" onClick={() => filterProducts("ALL")}>ALL</button>
                       <button className="btn" onClick={() => filterProducts("Chairs")}>Chairs</button>
                       <button className="btn" onClick={() => filterProducts("Electronics")}>Electronics</button>
                       <button className="btn" onClick={() => filterProducts("Lamps")}>lamps</button>
                       <button className="btn" onClick={() => filterProducts("Kitchen Accessories")}>Kitchen Accessories</button>
                       <button className="btn" onClick={() => filterProducts("Sofas")}>Sofas</button>
                    </div>

                    <div className="products">
                        {filter.map((item) => {
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
        </>
    )
}


export default Products;
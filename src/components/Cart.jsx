import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Cart.css"
import { incCart, decCart, delCart, clearCart } from '../store/action/index';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'


const Cart = () => {
    const state = useSelector(state => state.handleCart);
    const dispatch = useDispatch();

    /*
  let initTodo;
  if (localStorage.getItem("state") === null) {
      initTodo = [];
  }
  else {
      initTodo = JSON.parse(localStorage.getItem("state"));
  }
  useEffect(() => {
      localStorage.setItem("state", JSON.stringify(state));
  }, [state])
  */

    const renderEmptyCart = () => {
        return (
            <div className="cart-empty text-center mt-5 lead" >
                <p>Your cart is currently empty</p>
                <NavLink className="nav-link" to="/products">Start Shopping</NavLink>
            </div>
        );
    };

    let total = 0;
    const itemList = (item) => {
        total = total + item.price * item.qty;
    }


    return (
        <div className='cart'>
            {state.length !== 0 && state.map((cartItem) => (
                <div className="container px-4 my-5" key={cartItem.id}>
                    <div className="container p-4">
                        <button onClick={() => dispatch(delCart(cartItem))} className='btn-close' aria-label='Close'></button>
                        <div className="row">
                            <div className="col-md-4 text-center mb-5" >
                                <img src={cartItem.img} alt={cartItem.title} height="200px" width="180px" />
                            </div>
                            <div className="col-md-8">
                                <h3>{cartItem.title}</h3>
                                <p className='lead fw-bold'>
                                    ${cartItem.qty * cartItem.price}
                                </p>
                                <div className="item-quantity">
                                    <button className="qty-button" onClick={() => {
                                        if (cartItem.qty === 1) {
                                            dispatch(delCart(cartItem))
                                        } else {
                                            dispatch(decCart(cartItem))
                                        }
                                    }}>-</button>
                                    <div className="qty-number">
                                        <p>{cartItem.qty}</p>
                                    </div>
                                    <button className="qty-button" onClick={() =>
                                        incCart(dispatch(cartItem))
                                    }>+</button>
                                </div>

                                <button className="btn mt-2" onClick={() => dispatch(delCart(cartItem))}> Remove From Cart</button>

                            </div>

                        </div>
                    </div>
                </div>
            ))}

            {state.length !== 0 &&
                <>
                    <div className="subtotal">
                        {state.length !== 0 && state.map(itemList)}
                        <div className="price text-end">
                            <span>Total USD</span> &nbsp;
                            <strong>${total.toFixed(2)}</strong>
                        </div>
                    </div>
                    <div className="buttons">
                        <div className="container ">
                            <div className="row">
                                <div className="container text-center">
                                    <NavLink className='btn mb-3 ' to="/checkout">Proceed to Checkout</NavLink> &nbsp;
                                    <button className='btn mb-3' onClick={() => dispatch(clearCart())}>Clear Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
            {state.length === 0 && renderEmptyCart()}
        </div>
    )
}

export default Cart;
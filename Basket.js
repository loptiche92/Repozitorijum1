import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import util from '../util'
import { useDispatch,useSelector } from 'react-redux'
import { addToCart, clearCart, deleteProductFromCart, decreaseCart } from '../cartSlice'

const Basket = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  console.log(cart);
  const handleRemoveFromCart = (cartItem) => {
    dispatch(deleteProductFromCart(cartItem))
  }
  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product))
  }
  const handleClearCart = () => {
    dispatch(clearCart())
  }
  return (
    <div>
         
    <div className="cart-container">
        <h2>Shopping Cart</h2>
        {
            cart.cartItems.length === 0
            ? "Basket is empty"
            : <div>You have {cart.cartItems.length} items in the basket. <hr/></div>
        }
        {cart.cartItems.length === 0 ? (
            <div className="cart-empty">
            <p>Your cart is currently empty</p>
            <div className="start-shopping">
                <Link to="/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-arrow-left"
                        viewBox="0 0 16 16"
                    >
                    <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0
                            1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0
                            .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                        />
                    </svg>
                    <span>Start Shopping</span>
                    </Link>
                </div>
            </div>
        )
        : (
            <div>
                <div className="titles">
                    <h3 className="product-title">Product</h3>
                    <h3 className="price">Name</h3>
                    <h3 className="price">Price</h3>
                    <h3 className="quantity">Quantity</h3>
                    <h3 className="total">Total</h3>
                </div>
                <div className="cart-items">
                    {cart.cartItems &&
                    cart.cartItems.map((x) => (
                        <div className="cart-item" key={x.id}>
                            <div className="cart-product">
                                <img className="rounded" src={`/products/${x.sku}_2.jpg`} alt={x.name} />
                               
                            </div>
                            <div>
                                    <h3>{x.title}</h3>
                                    <p>{x.description}</p>
                                    <button className="remove" onClick={() => handleRemoveFromCart(x)}>
                                        Remove
                                    </button>
                                </div>
                            <div className="cart-product-price">${x.price}</div>
                                <div className="cart-product-quantity">
                                    <button onClick={() => handleDecreaseCart(x)}>
                                    -
                                    </button>
                                    <div className="count">{x.cartQuantity}</div>
                                    <button onClick={() => handleAddToCart(x)}>+</button>
                                </div>
                            <div className="cart-product-total-price">
                                    ${x.price * x.cartQuantity}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-summary">
                    <button className="clear-btn" onClick={() => handleClearCart()}>
                    Clear Cart
                    </button>
                    <div className="cart-checkout">
                        <div className="subtotal">
                            <span>Subtotal</span>
                            <span className="amount">{ util.formatCurrency(cart.cartItems.reduce((a,c) => (a + c.price*c.cartQuantity),0))}</span>
                        </div>
                        <p>Taxes and shipping calculated at checkout</p>
                        <button>Check out</button>
                        <div className="continue-shopping">
                            <Link to="/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-arrow-left"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                    fillRule="evenodd"
                                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                    />
                                </svg>
                                <span>Continue Shopping</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
</div>
    )
  }


export default Basket


// export default class Basket extends Component {
//   render() {
//     const { cartItems } = this.props
//     return (
//       <div className='alert alert-info'>
//         {
//             cartItems.length === 0
//             ? "Cart is empty"
//             : <div>You have {cartItems.length} articles in cart</div>
//         }
//         {
//             cartItems.length > 0 && 
//             <div>
//                 <ul style={{marginLeft: -25}}> 
//                     {
//                     cartItems.map(x =>(
//                         <li key={x.id}>
//                             <strong>{x.title}</strong>
//                               <button
//                               className='btn btn-danger'
//                               onClick={e=>this.props.handleRemoveFromCart(e,x)}
//                               >
//                               x
//                               </button>
//                               <br/>
//                             {x.count} x {util.formatCurrency(x.price)}
//                         </li>
//                     ))
//                     }
//                 </ul>
                
//                 <strong>Sum {util.formatCurrency(cartItems.reduce((x,y)=>(x + y.price * y.count),0))}</strong>
//                 <br/>
//                 <button
//                     className='btn btn-danger'
//                     onClick={()=> alert('Implement checkout page')}
//                     >
//                     CheckOut
//                 </button>       
//             </div>
//         } 
//       </div>
//     )
//   }
// }



//{
  /* <div className='cart-container'>
      <h2>Shopping Cart</h2>
        {
            cart.cartItems.length === 0
            ? ("Cart is empty"
            ): (<div>You have {cart.cartItems.length} articles in cart</div>
        )}
        {
            cart.cartItems.length > 0 && (
            <div className=''>
                <ul style={{marginLeft: -25}}> 
                    {
                    cart.cartItems.map(x =>(
                        <li key={x.id}>
                            <strong>{x.title}</strong>
                              <button
                              className='btn btn-danger'
                              onClick={()=>handleRemoveFromCart(x)}
                              >
                              x
                              </button>
                              <br/>
                            {x.cartQuantity} x {util.formatCurrency(x.price)}
                        </li>
                    ))
                    }
                </ul>
                
                <strong>Sum {util.formatCurrency(cart.cartItems.reduce((x,y)=>(x + y.price * y.cartQuantity),0))}</strong>
                
                <br/>
                <button
                    className='btn btn-danger'
                    onClick={()=> alert('Implement checkout page')}
                    >
                    CheckOut
                </button>       
            </div>
        )} 
      </div> */
    //}
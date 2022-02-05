import {ReactComponent as TrashCan} from '../images/icon-delete.svg';
import {ReactComponent as IconCart}  from '../images/icon-cart.svg';
import AddProdBtn from './AddProdBtn';
import AddToCartBtn from './AddToCartBtn';
import {useState} from 'react';


 
function CartControls (item) {
const [cartItems, setCartItems] = useState([]);

        return (
                <>
                <label htmlFor='cart-btn-checkbox' className='cart-btn'> <IconCart/></label>
                <input type='checkbox' id='cart-btn-checkbox' hidden  ></input>  
                <h3  className='inside-cart-badge'> {100} </h3>

                        <div className='inside-cart-box'>
                                <h1  className='inside-cart-bold-title' > Cart</h1>
                                <div className='inside-cart-border'></div>
                                {cartItems.length === 0 && <h2 className='inside-cart-empty'> Your Cart Is Empty </h2>}
                                <h3  className='inside-cart-prod-title'>{item.title} <br></br> ${item.price} x 100 </h3>
                                <h3  className='inside-cart-total'> ${item.total}</h3>
                                <TrashCan className='trash-can' fill='#C3CAD9'/>
                                <img className='cart-prod-thumbnail' src={item.imgt1} alt='Item Thumbnail'></img>
                                <h1  className={'orange-btn-white-text checkout-btn '}> Checkout</h1> 
                        </div>
                        <AddProdBtn/>
                        <AddToCartBtn/>
                </>   
)

}



export default CartControls 

import Data from '../components/Data';
import AddProdBtn from './AddProdBtn';
import AddToCartBtn from './AddToCartBtn';
import {ReactComponent as TrashCan} from '../images/icon-delete.svg';
import {ReactComponent as IconCart}  from '../images/icon-cart.svg';
import {useState} from 'react';


 
const CartControls = item => {
const {productData} = Data;
const [cartItems, setCartItems] = useState([]);



        return (
           <>
                <label htmlFor='cart-btn-checkbox' className='cart-btn'> <IconCart/></label>
                <input type='checkbox' id='cart-btn-checkbox' hidden />  
                <h3  className='inside-cart-badge'> {0} </h3>

                        <div className='inside-cart-box'>
                                <h1  className='inside-cart-bold-title'>Cart</h1>
                                <div className='inside-cart-border'></div>
                                {cartItems.length === 0 && <h2 className='inside-cart-empty'> Your Cart Is Empty </h2>}
                                <h3  className='inside-cart-prod-title-price'>{item.title} <br></br> ${item.price} x {Number} </h3>
                                <h3  className='inside-cart-total'> ${item.total}</h3>
                                <TrashCan className='inside-cart-trash-can' fill='#C3CAD9'/>
                                <img className='inside-cart-prod-thumbnail' src={item.imgt1} alt='Item Thumbnail'></img>
                                <h1  className='orange-btn-white-text inside-cart-checkout-btn'> Checkout</h1> 
                        </div>

                <AddProdBtn productData={productData}/>  
                <AddToCartBtn productData={productData}/>  
                        
           </>   
        )

}



export default CartControls 

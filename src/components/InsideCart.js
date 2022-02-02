import {ReactComponent as TrashCan} from '../images/icon-delete.svg';
import {ReactComponent as IconCart}  from '../images/icon-cart.svg';

const InsideCart = (item) => 
    
    
    <>
        <label htmlFor='cartbtncheckbox' className='cartbtn'> <IconCart/></label>
        <input type='checkbox' id='cartbtncheckbox' hidden  ></input>  
        <h3  className='insidecartsticker'> {100} </h3>

                <div className='insidecartbox'>
                        <h1  className='insidecartbold' > Cart</h1>
                        <div className='insidecartborder'></div>
                        <h2  className='insidecartempty'> Your cart is empty</h2>
                        <h3  className='insidecarttitle'>{item.title} <br></br> ${item.price} x 100 </h3>
                        <h3  className='insidecarttotal'> $itemtotal</h3>
                        <TrashCan className='trashcan' fill='#C3CAD9'/>
                        <img className='cartitemthumbnail' src={item.imgt1} alt='Item Thumbnail'></img>
                        <h1  className={'orangebtnwhitetext checkoutbtn'}> Checkout</h1> 
                </div>
    </>


export default InsideCart

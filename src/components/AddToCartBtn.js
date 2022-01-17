import IconCart from '../images/icon-cart.svg';

const AddToCartBtn = () => {
    return (
        <div id= 'addtocartbtn'>
        <img className= 'cartwhite' src={IconCart} alt= 'Add To Cart Cart Icon'/>
        <h1 className= 'orangebtnwhitetext'> Add to cart</h1>
            
        </div>
    )
}

export default AddToCartBtn

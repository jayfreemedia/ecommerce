import TrashCan from '../images/icon-delete.svg';

const InsideCart = (item) => {
    return (
        <div id='insidecartbox'>
        <h3 className='insidecartsticker'> 20 </h3>
        <h1 className='insidecartbold' > Cart</h1>
        <div className='insidecartborder'></div>
        {/* <h2 className='insidecartempty'> Your cart is empty</h2> */}
        <h3 className='insidecarttitle'>{item.title} <br></br> ${item.price} x 100 </h3>
        <h3 className='insidecarttotal'> $itemtotal</h3>
        <img className='trashcan' src={TrashCan} alt='Delete'></img>
        <img className='cartitemthumbnail' src={item.imgt1} alt='Item Thumbnail'></img>
        <h1 className={'orangebtnwhitetext checkoutbtn'}> Checkout</h1>
            
        </div>
    )
}

export default InsideCart

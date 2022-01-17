import '../index.css';
import Data from '../components/Data';
import MenuBtn from '../components/MenuBtn';
import Header from '../components/Header';
import CartBtn from '../components/CartBtn';
import AvatarBtn from '../components/AvatarBtn';
import ProdBig from '../components/ProdBig';
import ProdDesc from '../components/ProdDesc';
import ProdPrice from '../components/ProdPrice';
import AddProdBtn from '../components/AddProdBtn';
import AddToCartBtn from '../components/AddToCartBtn';
import InsideCart from '../components/InsideCart';




function Home  () {
    
  return (
    <div className='container' >
    <MenuBtn/>
    <Header/>
    <CartBtn/>
    <AvatarBtn/>

    {Data.productData.map((item, id) => {
        return(
            <ProdBig img1={item.img1} key={id} /> 
        )
    })}

    {Data.productData.map((item, id) => {
        return(
            <ProdPrice price={item.price.toFixed(2)} percent={item.percent} discount={item.discount.toFixed(2)} key={id} /> 
        )
    })}

    {Data.productData.map((item, id) => {
        return(
            <ProdDesc companyname={item.companyname} title={item.title} description={item.description} key={id} /> 
        )
    })}

    <AddProdBtn/>
    <AddToCartBtn/>
    
    {Data.productData.map((item, id) => {
        return( 
            <InsideCart imgt1={item.imgt1} title={item.title} price={item.price.toFixed(2)} key={id}/>
        )
    })}

    </div>
  );
}


export default Home
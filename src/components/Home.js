import '../index.css';
import Data from '../components/Data';
import MenuNav from '../components/MenuNav'
import Header from '../components/Header';
import AvatarBtn from '../components/AvatarBtn';
import ProdImgNav from '../components/ProdImgNav';
import ProdDesc from '../components/ProdDesc';
import ProdPrice from '../components/ProdPrice';
import CartControls from '../components/CartControls';


const Home = () => {

        return (
          <div className='container' >
          <MenuNav/>
          <Header/>
          <AvatarBtn/>

          {Data.productData.map((item) => <ProdImgNav img1={item.img1} key={item.id} /> )}

          {Data.productData.map((item) => <ProdPrice price={item.price.toFixed(2)}  percent={item.percent} discount={item.discount.toFixed(2)} key={item.id} /> )}

          {Data.productData.map((item) => <ProdDesc companyname={item.companyname} title={item.title} description={item.description} key={item.id} /> )}

          {Data.productData.map((item) => <CartControls imgt1={item.imgt1} title={item.title} price={item.price.toFixed(2)} key={item.id}/>)}

          </div>
        );
      }

export default Home
import {ReactComponent as IconPrevious} from '../images/icon-previous.svg';
import {ReactComponent as IconNext} from '../images/icon-next.svg';


const ProdImgNav = (item) => (
 
        <div className= 'container-prod-img-nav'>
                <IconPrevious className= 'prev-icon'/> 
                <img className= 'prod-img-big' src= {item.img1} alt='Product'></img> 
                <IconNext className= 'next-icon'/>  
        </div>
)
    
export default ProdImgNav

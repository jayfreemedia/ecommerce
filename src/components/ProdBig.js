import IconPrevious from '../images/icon-previous.svg';
import IconNext from '../images/icon-next.svg';


const ProdBig = (props) => 
 
        <div className= 'wrapperimgb'>
                <div className= 'whitebtnprev'> <img className= 'prev-icon' src={IconPrevious} alt= 'Previous Icon'/> </div>
                <img className= 'prod-imgb' src= {props.img1} alt='Product'></img> 
                <div className= 'whitebtnnext'> <img className= 'next-icon' src={IconNext} alt= 'Next Icon'/> </div>  
        </div>
    
export default ProdBig

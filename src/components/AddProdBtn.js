import PlusBtn from '../images/icon-plus.svg';
import MinusBtn from '../images/icon-minus.svg';

const AddProdBtn = () => 
        
        <div className= 'addprodbtn'>
                <img className= 'minus-btn' src={MinusBtn} alt= 'Minus Icon'/>
                <h1  className= 'prod-num'> 0 </h1>
                <img className= 'plus-btn'  src={PlusBtn}  alt= 'Plus Icon'/>
        </div>
 
export default AddProdBtn

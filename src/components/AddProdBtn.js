import PlusBtn from '../images/icon-plus.svg';
import MinusBtn from '../images/icon-minus.svg';

const AddProdBtn = () => 
        
        <div id= 'addprodbtn'>
        <img id= 'minus-btn' src={MinusBtn} alt= 'Minus Icon'/>
        <h1  id= 'prod-num'> 0 </h1>
        <img id= 'plus-btn'  src={PlusBtn}  alt= 'Plus Icon'/>
        </div>
 
export default AddProdBtn

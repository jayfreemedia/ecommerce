import PlusBtn from '../images/icon-plus.svg';
import MinusBtn from '../images/icon-minus.svg';
import {useState} from 'react';


const AddProdBtn = () => {

        const [count, setCount] = useState(0);
        const decrementCount = () => {
                if(count > 0){
                        setCount(count - 1)
                }
        }
        const incrementCount = () => setCount(count + 1); 
                return (
                        <div className= 'add-prod-btn'>
                                <img onClick={decrementCount} className= 'minus-btn' src={MinusBtn} alt= 'Minus Icon'/>
                                <h1  className= 'prod-num'> {count} </h1>
                                <img onClick={incrementCount} className= 'plus-btn'  src={PlusBtn}  alt= 'Plus Icon'/>
                        </div>
                )
        }

export default AddProdBtn

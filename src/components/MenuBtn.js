import IconMenu from '../images/icon-menu.svg';


const MenuBtn = () => 

        <>
        <input type='checkbox' id='openmenu' hidden ></input> 
        <label htmlFor='openmenu' className='menubtn'>       
        <img src={IconMenu}  alt='Menu Button' />
        </label>
        </>
        
export default MenuBtn

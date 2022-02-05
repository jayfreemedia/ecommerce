import {ReactComponent as IconClose} from '../images/icon-close.svg';
import {ReactComponent as IconMenu}  from '../images/icon-menu.svg';

const MenuNav = () => 

     <>
        <label htmlFor='menu-checkbox' className='menu-btn'> <IconMenu/> </label>
        <input type='checkbox' id='menu-checkbox' hidden ></input>  
        
                <div className= 'menu-nav-bg'>   
                        <div className=  'menu-nav'>
                                <label htmlFor='menu-checkbox' className='menu-close-btn'><IconClose /></label> 
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <a href='#collections'><h2 className= 'menu-nav-text'>Collections</h2></a>
                                <a href='#men'><h2 className= 'menu-nav-text'>Men</h2></a>
                                <a href='#women'><h2 className= 'menu-nav-text'>Women</h2></a>
                                <a href='#about'><h2 className= 'menu-nav-text'>About</h2></a>
                                <a href='#contact'><h2 className= 'menu-nav-text'>Contact</h2></a>
                        </div>
                </div>
     </>


export default MenuNav

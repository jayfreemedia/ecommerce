import IconClose from '../images/icon-close.svg';
import IconMenu from '../images/icon-menu.svg';

const MenuNav = () => 

        <>
        
        <label htmlFor='menucheckbox' className='menubtn'>       
        <img src={IconMenu}  alt='Menu Button' /></label>
        <input type='checkbox' id='menucheckbox' hidden ></input>  
        
        <div className= 'menunavbg'>   
                <div className=  'menunav'>
                        <label htmlFor='menucheckbox' className='menuclosebtn'> 
                        <img src={IconClose} alt='Close Button'></img> 
                        </label> 
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <a href='#collections'><h2 className= 'menunavtext'>Collections</h2></a>
                        <a href='#men'><h2 className= 'menunavtext'>Men</h2></a>
                        <a href='#women'><h2 className= 'menunavtext'>Women</h2></a>
                        <a href='#about'><h2 className= 'menunavtext'>About</h2></a>
                        <a href='#contact'><h2 className= 'menunavtext'>Contact</h2></a>
                </div>
        </div>
        </>


export default MenuNav

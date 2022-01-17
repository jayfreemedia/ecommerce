import IconMenu from '../images/icon-menu.svg';



const MenuBtn = () => {
    return (
        <div>
        <img id= "menubtn" src={IconMenu} onClick={() => console.log('Replace With Nav')} alt='Menu Button' />
        </div>
    );
}

export default MenuBtn

import BurgerMenu from "../BurgerMenu";
import Navigation from "../Navigation";
import style from './Menu.module.scss';

const Menu = () => {
  return <div>
    <div className={style.nav}>
      <Navigation />
    </div>

    <BurgerMenu />
  </div>
}

export default Menu;
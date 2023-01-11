import { useState } from 'react';
import cn from 'classnames';
import style from './BurgerMenu.module.scss';
import Navigation from '../Navigation';

const BurgerMenu = () => {
  const [burgerClass, setBurgerClass] = useState(cn(style.burgerBar, style.unclicked));
  const [menuClass, setMenuClass] = useState(cn(style.menu, style.hidden));
  const [isMenuClicked, setMenuState] = useState(false);

  const updateMenu = () => {
    setBurgerClass(cn(style.burgerBar, isMenuClicked ? style.unclicked : style.clicked));
    setMenuClass(cn(style.menu, isMenuClicked ? style.hidden : style.visible));

    setMenuState((prevValue) => !prevValue);
  }

  return <div className={style.wrapper}>
    <div className={style.container}>
      <div className={style.burgerMenu} onClick={updateMenu}>
        <div className={burgerClass} />
        <div className={burgerClass} />
        <div className={burgerClass} />
      </div>
    </div>

    <div className={menuClass}>
      <Navigation handleLinkClick={updateMenu} />
    </div>
  </div>
}

export default BurgerMenu;

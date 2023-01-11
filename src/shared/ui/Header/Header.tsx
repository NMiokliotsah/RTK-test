import React from "react";
import Menu from "../Menu";
import style from './Header.module.scss';

const Header = () => {
  return <header className={style.wrapper}>
    <div className={style.container}>
      <a className={style.homeLink} href="./">TodoList</a>

      <Menu />
    </div>
  </header>
}

export default Header;
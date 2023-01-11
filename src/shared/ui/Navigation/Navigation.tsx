import { Link } from 'react-router-dom';
import style from './Navigation.module.scss';

interface NavigationProps {
  handleLinkClick?: React.MouseEventHandler<HTMLAnchorElement>,
}

const Navigation = ({ handleLinkClick }: NavigationProps) => {
  return <div className={style.wrapper}>
    <nav className={style.navigation}>
      <Link onClick={handleLinkClick} className={style.menuItem} to='./'>Home</Link>
      <Link onClick={handleLinkClick} className={style.menuItem} to="/about">About</Link>
      <Link onClick={handleLinkClick} className={style.menuItem} to="/contact">Contact Us</Link>
    </nav>
  </div>
}

export default Navigation;
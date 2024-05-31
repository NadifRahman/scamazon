import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import NavbarStyle from './Navbar.module.css';
import logo from '../../assets/scamazon-logo.png';

function Navbar() {
  return (
    <nav className={NavbarStyle.nav}>
      <ul className={NavbarStyle.ul}>
        <li className={`${NavbarStyle.li}`}>
          <Link to="/" className={NavbarStyle.link}>
            Home
          </Link>
        </li>
        {/*change these routers later*/}
        <li className={`${NavbarStyle.li}`}>
          <Link to="/" className={NavbarStyle.link}>
            Shop
          </Link>
        </li>
        <li className={`${NavbarStyle.cartIcon} ${NavbarStyle.li}`}>
          <Link to="/" className={NavbarStyle.link}>
            <CartIcon numberOfItems={1} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

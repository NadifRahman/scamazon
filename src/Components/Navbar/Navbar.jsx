/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import NavbarStyle from './Navbar.module.css';

function Navbar({ items }) {
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
          <Link to="Shop" className={NavbarStyle.link}>
            Shop
          </Link>
        </li>
        <li className={`${NavbarStyle.cartIcon} ${NavbarStyle.li}`}>
          <Link to="Cart" className={NavbarStyle.link}>
            <CartIcon
              numberOfItems={items.filter((item) => item.quantity > 0).length}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

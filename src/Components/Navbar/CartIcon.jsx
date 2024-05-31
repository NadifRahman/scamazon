import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import CartStyle from './CartIcon.module.css';

function CartIcon({ numberOfItems }) {
  //Number of items is the number that goes in the red circle
  return (
    <div role="button" className={CartStyle.iconContainer}>
      <FontAwesomeIcon
        icon={faCartShopping}
        className={CartIcon.shoppingCart}
      />
      {numberOfItems >
        0 /* only render if numberOfItems is greater than 0*/ && (
        <div className={CartStyle.counter}>{numberOfItems}</div>
      )}
    </div>
  );
}

CartIcon.propTypes = {
  numberOfItems: PropTypes.number,
};

export default CartIcon;

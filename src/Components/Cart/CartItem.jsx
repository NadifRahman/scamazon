import formatPrice from '../../util/formatPrice';
import ItemStyle from './CartItem.module.css';
import { Link } from 'react-router-dom';
function CartItem({ item, updateQuantity }) {
  const handleClick = () => {
    updateQuantity(item.id, 0);
  };

  return (
    <div className={ItemStyle.container}>
      <button className={ItemStyle.button} onClick={handleClick}>
        ❌
      </button>
      <img
        src={item.image}
        alt={`image icon of ${item.title}`}
        className={ItemStyle.img}
      />
      <Link key={item.id} to={`/ProductPage/${item.id}`}>
        <h4 className={ItemStyle.title}>
          {item.title.length < 21
            ? item.title
            : item.title.substring(0, 21) + '...'}
        </h4>
      </Link>
      <h5 className={ItemStyle.price}>{`${formatPrice(item.price)} × ${
        item.quantity
      }`}</h5>
    </div>
  );
}

export default CartItem;

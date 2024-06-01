import { useOutletContext } from 'react-router-dom';
import CartItem from './CartItem';
import CartStyle from './Cart.module.css';
import formatPrice from '../../util/formatPrice';
function Cart() {
  const { items, setItems, updateQuantity, loading } = useOutletContext();

  if (loading) return 'Loading';

  const filteredItems = items.filter((item) => item.quantity > 0);

  const handleClick = () => {
    alert('SCAMMED.');
    const newItems = [...items];
    setItems(newItems.map((item) => ({ ...item, quantity: 0 })));
  };

  return (
    <>
      {filteredItems.length > 0 ? (
        <div className={CartStyle.cardContainer}>
          <div className={CartStyle.itemContainer}>
            {filteredItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
              />
            ))}
          </div>

          <h4 className={CartStyle.total}>{`Total: ${formatPrice(
            filteredItems.reduce(
              (acc, curr) => curr.quantity * curr.price + acc,
              0
            )
          )}`}</h4>
          <button className={CartStyle.button} onClick={handleClick}>
            Purchase
          </button>
        </div>
      ) : (
        <div className={CartStyle.empty}>Empty Cart</div>
      )}
    </>
  );
}

export default Cart;

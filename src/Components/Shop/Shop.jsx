import { useOutletContext } from 'react-router-dom';
import ItemCard from './ItemCard';
import ShopStyle from './Shop.module.css';
function Shop() {
  const { items, setItems, loading } = useOutletContext();

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className={ShopStyle.itemCardContainer}>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Shop;

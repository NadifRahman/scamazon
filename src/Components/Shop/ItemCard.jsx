import formatPrice from '../../util/formatPrice';
import ItemCardStyle from './ItemCard.module.css';
import { Link } from 'react-router-dom';
/*This component takes an item object that has the properties*/
function ItemCard({
  item: { id, title, price, category, description, image, quantity },
}) {
  return (
    <div className={ItemCardStyle.cardContainer}>
      <div className={ItemCardStyle.imgContainer}>
        <img
          src={image}
          alt={`Image of ${title}`}
          className={ItemCardStyle.img}
        ></img>
      </div>
      <Link to={`/ProductPage/${id}`}>
        <h2 className={ItemCardStyle.title}>{title}</h2>
      </Link>
      <h3 className={ItemCardStyle.price}>{formatPrice(price)}</h3>
    </div>
  );
}

export default ItemCard;

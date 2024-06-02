import { useParams } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import { useRef } from 'react';
import ProdPgStyle from './ProductPage.module.css';
import formatPrice from '../../../util/formatPrice';

function ProductPage() {
  const { id } = useParams();
  const { items, updateQuantity, loading } = useOutletContext();
  const quantityRef = useRef(null);

  let productid = Number(id); //convert to use as a number

  if (loading) return 'Loading';

  const item = items.find((item) => item.id === productid); //gets the id at specified id
  if (!item) return 'Invalid ID'; //if unable to find in items list

  const handleSubmit = (e) => {
    e.preventDefault();
    const quantity = Number(quantityRef.current.value);
    updateQuantity(productid, quantity); //updates the quantity of the object
  };

  return (
    <div className={ProdPgStyle.container}>
      <img src={item.image} alt="" className={ProdPgStyle.img} />
      <div className={ProdPgStyle.rightContainer}>
        <h1 className={ProdPgStyle.title}>{item.title}</h1>
        <h3 className={ProdPgStyle.price}>{formatPrice(item.price)}</h3>
        <p className={ProdPgStyle.description}>{item.description}</p>
        <form className={ProdPgStyle.form} action="" onSubmit={handleSubmit}>
          <h3 className={ProdPgStyle.quantity}>Quantity</h3>
          <input
            className={ProdPgStyle.input}
            type="number"
            min="1"
            max="100"
            step="1"
            placeholder={item.quantity}
            ref={quantityRef}
          />
          <button className={ProdPgStyle.submit} type="submit">
            Add to Cart
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductPage;

import { useParams } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams();
  const { items, setItems, loading } = useOutletContext();

  return `${id} ${loading}`;
}

export default ProductPage;

import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ProductContext } from '../../context/productProvider';
import { currentUserSelector } from '../../redux/selectors';

function ProductListItem({ item }) {
  const { removeProduct } = useContext(ProductContext);
  const { id: userId } = useSelector(currentUserSelector);
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={item.image} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        {item.userId === userId && (
          <a className="btn btn-danger" onClick={() => removeProduct(item.id)}>
            remove product
          </a>
        )}
      </div>
    </div>
  );
}

export default ProductListItem;

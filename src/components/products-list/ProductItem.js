import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/productProvider';
import { currentUserSelector } from '../../redux/selectors';

function ProductListItem({ item }) {
  const { removeProduct, addInFavourites, removeFromFavourites } =
    useContext(ProductContext);
  const { id: userId } = useSelector(currentUserSelector);

  return (
    <div className="card m-3 rounded shadow-lg" style={{ width: '18rem' }}>
      <Link to={'product/' + item.id}>
        <img src={item.image} className="card-img-top mt-3" alt={item.title} />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        {item.userId === userId && (
          <a className="btn btn-danger" onClick={() => removeProduct(item.id)}>
            Remove Product
          </a>
        )}

        {item.userId !== userId &&
          (item.favourites.includes(userId) ? (
            <button
              className="btn btn-warning"
              onClick={() => removeFromFavourites(item.id, userId)}>
              Remove From Favourites
            </button>
          ) : (
            Boolean(userId) && (
              <button
                className="btn btn-success"
                onClick={() => addInFavourites(item.id, userId)}>
                Add In Favourites
              </button>
            )
          ))}
      </div>
    </div>
  );
}

export default ProductListItem;

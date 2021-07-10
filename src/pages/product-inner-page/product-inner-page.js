import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { ProductContext } from '../../context/productProvider';
import { currentUserSelector } from '../../redux/selectors';
import { USERS } from '../../utils/constants';

function ProductInnerPage() {
  const { productList, addInFavourites, removeFromFavourites } =
    useContext(ProductContext);

  const { id: productId } = useParams();
  const { id: userId } = useSelector(currentUserSelector);
  console.log(userId);
  const users = JSON.parse(localStorage.getItem(USERS));
  const currentItem = productList.find((item) => item.id === Number(productId));
  const author = users.find((item) => item.id === currentItem.userId);
  return (
    <div className="row flex-column align-items-center flex-md-row justify-content-md-between">
      <div className="col-10 col-xl-4 col-lg-6 col-md-6 mb-5">
        <img src={currentItem.image} alt={currentItem.title} className="w-100" />
      </div>
      <div className="col-10 col-xl-6 col-lg-6 col-md-6 mx-auto">
        <div className="mb-3 border-bottom pb-3">
          <h3 className="mb-3">Title:</h3>
          <h4 className="text-muted">{currentItem.title}</h4>
        </div>
        <div className="mb-3 border-bottom pb-3">
          <h3 className="mb-3">Description:</h3>
          <h4 className="text-muted">{currentItem.description}</h4>
        </div>
        <div className="mb-3 border-bottom pb-3">
          <h3 className="mb-3">Price:</h3>
          <h4 className="text-muted">{currentItem.price} ₾</h4>
        </div>
        <div className="mb-3 border-bottom pb-3">
          <h3 className="mb-3">Contact:</h3>
          <h4 className="text-muted">{author.email}</h4>
        </div>
        <div>
          {currentItem.userId !== userId &&
            (currentItem.favourites.includes(userId) ? (
              <button
                className="btn btn-warning"
                onClick={() => removeFromFavourites(currentItem.id, userId)}>
                Remove From Favourites
              </button>
            ) : (
              Boolean(userId) && (
                <button
                  className="btn btn-success"
                  onClick={() => addInFavourites(currentItem.id, userId)}>
                  Add In Favourites
                </button>
              )
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductInnerPage;

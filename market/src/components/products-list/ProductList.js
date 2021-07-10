import { useContext } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ProductContext } from '../../context/productProvider';
import { currentUserSelector } from '../../redux/selectors';
import { FAVOURITES, HOME, MY_PRODUCTS } from '../../utils/constants';
import ProductListItem from './ProductItem';

const formatList = (list, userId, type) => {
  if (type === MY_PRODUCTS) {
    return list.filter((item) => item.userId === userId);
  } else if (type === FAVOURITES) {
    return list.filter((item) => item.favourites.includes(userId));
  }
  return list.filter((item) => item.userId !== userId);
};

function ProductList({ type = HOME }) {
  const { productList } = useContext(ProductContext);
  const { id: userId } = useSelector(currentUserSelector);
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {!formatList(productList, userId, type).length && (
        <h4 className="text-warning">You Don&apos;t have Active Products :(</h4>
      )}
      {formatList(productList, userId, type).map((item, index) => (
        <ProductListItem item={item} key={index} />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  type: PropTypes.string,
};

export default ProductList;

import { useContext } from 'react';
import { ProductContext } from '../../context/productProvider';
import ProductListItem from './ProductItem';

function ProductList() {
  const { productList } = useContext(ProductContext);
  return (
    <div>
      {productList.map((item, index) => (
        <ProductListItem item={item} key={index} />
      ))}
    </div>
  );
}

export default ProductList;

import AddProductForm from '../../components/forms/add-product-form';
import ProductList from '../../components/products-list';
import AddProductProviderComponent from '../../context';
import { MY_PRODUCTS } from '../../utils/constants';

function ProductPage() {
  return (
    <AddProductProviderComponent>
      <div>
        <h3 className="mb-3">Add Product</h3>
        <div className="mb-3 pb-3 border-bottom">
          <AddProductForm />
        </div>
        <div>
          <h3 className="mb-4">My Products</h3>
          <ProductList type={MY_PRODUCTS} />
        </div>
      </div>
    </AddProductProviderComponent>
  );
}
export default ProductPage;

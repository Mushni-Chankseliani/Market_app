import AddProductForm from '../../components/forms/add-product-form';
import ProductList from '../../components/products-list';
import AddProductProviderComponent from '../../context';

function ProductPage() {
  return (
    <AddProductProviderComponent>
      <div>
        <h1>add product</h1>
        <AddProductForm />
        <ProductList />
      </div>
    </AddProductProviderComponent>
  );
}
export default ProductPage;

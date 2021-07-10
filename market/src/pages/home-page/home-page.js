import ProductList from '../../components/products-list';
import AddProductProviderComponent from '../../context';

function HomePage() {
  return (
    <AddProductProviderComponent>
      <h3 className="mb-4">Products</h3>
      <ProductList />
    </AddProductProviderComponent>
  );
}

export default HomePage;

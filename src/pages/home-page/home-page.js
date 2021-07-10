import ProductList from '../../components/products-list';
import ProductProviderComponent from '../../context';

function HomePage() {
  return (
    <ProductProviderComponent>
      <h3 className="mb-4">Products</h3>
      <ProductList />
    </ProductProviderComponent>
  );
}

export default HomePage;

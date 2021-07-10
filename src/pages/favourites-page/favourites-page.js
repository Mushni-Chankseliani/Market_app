import ProductList from '../../components/products-list';
import ProductProviderComponent from '../../context';
import { withAuthProtected } from '../../hoc';
import { FAVOURITES } from '../../utils/constants';

function FavouritesPage() {
  return (
    <ProductProviderComponent>
      <h3 className="mb-4">Favourites</h3>
      <ProductList type={FAVOURITES} />
    </ProductProviderComponent>
  );
}

export default withAuthProtected(FavouritesPage);

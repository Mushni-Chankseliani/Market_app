import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { setProductsAction } from '../redux/actions/product-actions';
import { productSelector } from '../redux/selectors';
import { PRODUCTS } from '../utils/constants';

export const ProductContext = React.createContext(null);

function ProductProviderComponent({ children }) {
  const dispatch = useDispatch();
  const productList = useSelector(productSelector);
  const [storage, setStorage] = useLocalStorage(PRODUCTS, []);

  useEffect(() => {
    console.log(storage);
  }, [setStorage]);

  const addProduct = (product) => {
    const newObj = { ...product, id: Math.random(), favourites: [] };
    const newList = [newObj, ...productList];
    setStorage(() => newList);
    // localStorage.setItem(PRODUCTS, JSON.stringify(newList));
    dispatch(setProductsAction(newList));
  };

  const removeProduct = (productId) => {
    const newList = productList.filter((item) => item.id !== productId);
    setStorage(() => newList);
    // localStorage.setItem(PRODUCTS, JSON.stringify(newList));
    dispatch(setProductsAction(newList));
  };

  const addInFavourites = (productId, userId) => {
    const findObj = productList.find((product) => product.id === productId);
    const getIndex = productList.indexOf(findObj);
    if (getIndex !== -1) {
      const cloneProducts = [...productList];
      cloneProducts[getIndex].favourites = [
        ...cloneProducts[getIndex].favourites,
        userId,
      ];
      setStorage(() => cloneProducts);
      dispatch(setProductsAction(cloneProducts));
    }
  };

  const removeFromFavourites = (productId, userId) => {
    const findObj = productList.find((product) => product.id === productId);
    const getIndex = productList.indexOf(findObj);
    if (getIndex !== -1) {
      const cloneProducts = [...productList];
      cloneProducts[getIndex].favourites = cloneProducts[getIndex].favourites.filter(
        (id) => id !== userId
      );
      setStorage(() => cloneProducts);
      dispatch(setProductsAction(cloneProducts));
    }
  };

  return (
    <ProductContext.Provider
      value={{
        productList,
        addProduct,
        removeProduct,
        addInFavourites,
        removeFromFavourites,
      }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProviderComponent;

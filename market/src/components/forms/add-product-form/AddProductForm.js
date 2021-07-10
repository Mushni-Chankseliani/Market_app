import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { ProductContext } from '../../../context/productProvider';
import { currentUserSelector } from '../../../redux/selectors';

function AddProductForm() {
  const { addProduct } = useContext(ProductContext);
  const { id: userId } = useSelector(currentUserSelector);
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, touchedFields },
  } = useForm();

  const onSubmit = async (formData) => {
    addProduct({ ...formData, userId: userId });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="title"
          {...register('title', {
            required: true,
          })}
        />
        <label>Product title</label>
        {(touchedFields.title || errors.title) && (
          <span className="text-danger form-text">
            {!errors.title ??
              (errors.title.type === 'required' && 'title is required')}
            {touchedFields.title &&
              !getValues('title').length &&
              'title is required'}
          </span>
        )}
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="description"
          placeholder="description"
          {...register('description', {
            required: true,
          })}
        />
        <label>Product description</label>
        {(touchedFields.description || errors.description) && (
          <span className="text-danger form-text">
            {!errors.description ??
              (errors.description.type === 'required' && 'description is required')}
            {touchedFields.description &&
              !getValues('description').length &&
              'description is required'}
          </span>
        )}
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="image"
          placeholder="image url"
          {...register('image', {
            required: true,
          })}
        />
        <label>Product image</label>
        {(touchedFields.image || errors.image) && (
          <span className="text-danger form-text">
            {!errors.image ??
              (errors.image.type === 'required' && 'image is required')}
            {touchedFields.image &&
              !getValues('image').length &&
              'image is required'}
          </span>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Add Product
      </button>
    </form>
  );
}

export default AddProductForm;

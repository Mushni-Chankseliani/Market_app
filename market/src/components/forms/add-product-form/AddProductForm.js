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
      <div>
        <label htmlFor="title" className="form-label">
          Product title
        </label>
        <input
          type="title"
          className="form-control"
          id="title"
          {...register('title', {
            required: true,
          })}
        />
        {(touchedFields.title || errors.title) && (
          <span className="text-danger form-text">
            {!errors.title ??
              (errors.title.type === 'required' && 'title is required')}
            {touchedFields.title &&
              Boolean(getValues('title').length) &&
              'title is required'}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="description" className="form-label">
          Product description
        </label>
        <input
          type="description"
          className="form-control"
          id="description"
          {...register('description', {
            required: true,
          })}
        />
        {(touchedFields.description || errors.description) && (
          <span className="text-danger form-text">
            {!errors.description ??
              (errors.description.type === 'required' && 'description is required')}
            {touchedFields.description &&
              Boolean(getValues('description').length) &&
              'description is required'}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="image" className="form-label">
          Product image
        </label>
        <input
          type="text"
          className="form-control"
          id="image"
          {...register('image', {
            required: true,
          })}
        />
        {(touchedFields.image || errors.image) && (
          <span className="text-danger form-text">
            {!errors.image ??
              (errors.image.type === 'required' && 'image is required')}
            {touchedFields.image &&
              Boolean(getValues('image').length) &&
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

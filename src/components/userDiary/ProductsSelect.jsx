import React from 'react';
import { useSelector } from 'react-redux';

const ProductSelector = ({
  selectedProduct,
  setSelectedProduct,
  weight,
  setWeight,
  handleAddProduct,
}) => {
  const products = useSelector(state => state.products.products);
  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);

  const selectedProductCalories =
    products.find(product => product._id === selectedProduct)?.calories || 0;

  return (
    <div>
      {loading && <p>Cargando productos...</p>}
      {error && <p>{error}</p>}
      <select
        value={selectedProduct}
        onChange={e => setSelectedProduct(e.target.value)}
        style={{ marginRight: '10px' }}
      >
        <option value="">Seleccione un producto</option>
        {products.map(product => (
          <option key={product._id} value={product._id}>
            {product.title}
          </option>
        ))}
      </select>

      <input
        type="number"
        value={weight}
        onChange={e => setWeight(e.target.value)}
        placeholder="Gramos"
        style={{ marginRight: '10px' }}
      />

      <button onClick={() => handleAddProduct(selectedProductCalories)}>
        Añadir
      </button>
    </div>
  );
};

export default ProductSelector;

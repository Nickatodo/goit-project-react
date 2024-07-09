import React from 'react';
import HomeStyled from './HomeStyled';
import { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { caloriesThunk } from '../../redux/operators/caloriesOperator';
import {
  selectCaloriesLoading,
  selectCaloriesError,
  selectCalories,
  selectProducts,
} from '../../redux/selectors/caloriesSelector';
import { reset } from '../../redux/slices/caloriesSlice';

Modal.setAppElement('#root');

const Home = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    height: '',
    desiredWeight: '',
    age: '',
    currentWeight: '',
    bloodType: '',
  });

  const modalIsOpen = useSelector(
    state => state.caloriesCalculator.data !== null
  );
  const loading = useSelector(selectCaloriesLoading);
  const error = useSelector(selectCaloriesError);
  const calories = useSelector(selectCalories);
  const products = useSelector(selectProducts);

  const handleInputChage = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBloodChange = e => {
    setFormData(prevState => ({
      ...prevState,
      bloodType: e.target.value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(formData);
    await dispatch(caloriesThunk(formData));
  };

  const closeModal = () => {
    dispatch(reset());
  };

  return (
    <HomeStyled>
      <h1 className="title">
        Calcula tu ingesta diaria de calorías ahora mismo
      </h1>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleInputChage}
            required
          />
          <label htmlFor="height">Altura*</label>
        </div>

        <div className="form-group">
          <input
            type="number"
            id="desired-weight"
            name="desiredWeight"
            value={formData.desiredWeight}
            onChange={handleInputChage}
            required
          />
          <label htmlFor="desired-weight">Peso deseado*</label>
        </div>

        <div className="form-group">
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChage}
            required
          />
          <label htmlFor="age">Edad*</label>
        </div>

        <div className="form-group">
          <input
            type="number"
            id="current-weight"
            name="currentWeight"
            value={formData.currentWeight}
            onChange={handleInputChage}
            required
          />
          <label htmlFor="current-weight">Peso actual*</label>
        </div>

        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              id="option1"
              name="option"
              value="A"
              onChange={handleBloodChange}
              required
            />
            1
          </label>

          <label className="radio-label">
            <input
              type="radio"
              id="option2"
              name="option"
              value="B"
              onChange={handleBloodChange}
            />
            2
          </label>

          <label className="radio-label">
            <input
              type="radio"
              id="option3"
              name="option"
              value="AB"
              onChange={handleBloodChange}
            />
            3
          </label>

          <label className="radio-label">
            <input
              type="radio"
              id="option4"
              name="option"
              value="O"
              onChange={handleBloodChange}
            />
            4
          </label>
        </div>

        <div className="form-group" style={{ width: '240px' }}>
          <label htmlFor="blood-group">Grupo sanguíneo*</label>
        </div>

        <button type="submit" className="form-button_home">
          Comienza a perder peso
        </button>
      </form>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Calories"
      >
        <h2>Resultados</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error : {error.message}</p>
        ) : (
          <div>
            <p>Tu ingesta diaria recomendad de calorias es {calories} kcal</p>
            <h3>Alimentos que no deberias comer</h3>
            <ul>
              {products.slice(0, 4).map(product => (
                <li key={product._id}>{product.title}</li>
              ))}
            </ul>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        )}
      </Modal>
    </HomeStyled>
  );
};

export default Home;

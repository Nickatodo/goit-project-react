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
      <h1 className="title">Calculate your daily calorie intake right now</h1>

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
          <label htmlFor="height" className="form-label">
            Height*
          </label>
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
          <label htmlFor="desired-weight" className="form-label">
            Desired weight *
          </label>
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
          <label htmlFor="age" className="form-label">
            Age *
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="blood-group" className="form-label">
            Blood type *
          </label>
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
          <label htmlFor="current-weight" className="form-label">
            Current weight *
          </label>
        </div>

        <div className="form-group form-group-radio">
          <div className="radio-option">
            <input
              type="radio"
              id="option1"
              name="option"
              value="A"
              onChange={handleBloodChange}
              required
            />
            <p className="radio-label">1</p>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="option2"
              name="option"
              value="B"
              onChange={handleBloodChange}
            />
            <p className="radio-label">2</p>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="option3"
              name="option"
              value="AB"
              onChange={handleBloodChange}
            />
            <p className="radio-label">3</p>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="option4"
              name="option"
              value="O"
              onChange={handleBloodChange}
            />
            <p className="radio-label">4</p>
          </div>
        </div>

        <button type="submit" className="form-button_home">
          Start losing weight
        </button>
      </form>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Calories"
      >
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error : {error.message}</p>
        ) : (
          <div>
            <h2>Your recommended daily calorie intake is</h2>
            <h2>{calories} kcal</h2>
            <h3>Foods you should not eat</h3>
            <ul>
              {products.slice(0, 4).map((product, index) => (
                <li key={product._id}>
                  {index + 1}. {product.title}
                </li>
              ))}
            </ul>
            <button className="form-button_home">Start losing weight</button>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        )}
      </Modal>
    </HomeStyled>
  );
};

export default Home;

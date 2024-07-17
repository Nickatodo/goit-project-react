import React from 'react';
import HomeStyled from './HomeStyled';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './modal.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  caloriesThunk,
  caloriesLogedThunk,
} from '../../redux/operators/caloriesOperator';
import {
  selectCaloriesLoading,
  selectCaloriesError,
  selectCalories,
  selectProducts,
} from '../../redux/selectors/caloriesSelector';
import { selectIsLogged } from '../../redux/selectors/authSelectors';
import { reset } from '../../redux/slices/caloriesSlice';

import IconcloseModal from '../../img/svg/x.svg';
import Button from '../Button/Button';
import Sidebar from '../sideBar/SideBar'; // Importa el nuevo Sidebar

Modal.setAppElement('#root');

const Home = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(selectIsLogged);

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
  const [isOpen, setIsOpen] = useState(false);

  const loading = useSelector(selectCaloriesLoading);
  const error = useSelector(selectCaloriesError);
  const calories = useSelector(selectCalories);

  const products = useSelector(selectProducts);

  const handleInputChange = e => {
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
    const payload = { ...formData };
    if (isLogged) {
      await dispatch(caloriesLogedThunk(payload));
    } else {
      await dispatch(caloriesThunk(formData));
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    dispatch(reset());
  };

  useEffect(() => {
    if (modalIsOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [modalIsOpen]);

  return (
    <HomeStyled>
      <div className="home-container">
        <div className="home-content">
          <h1 className="title">
            Calculate your daily calorie intake right now
          </h1>

          <form className="form" onSubmit={handleSubmit}>
            <div className="form-inputs">
              <div className="form-group">
                <input
                  type="number"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
            </div>
            <div className="form-btn">
              <Button
                type={'submit'}
                text={'Start losing weight'}
                fontFamily={'Verdana'}
                fontSize={14}
                weight={700}
                primaryColor={'#FC842D'}
                secondaryColor={'#FFF'}
                width={210}
                height={44}
              />
            </div>
          </form>

          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Calories"
          >
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error : {error.message}</p>
            ) : (
              <div className="modal__container">
                <button
                  className="modal__close_button"
                  type="button"
                  onClick={closeModal}
                >
                  <svg width="20" height="20">
                    <use xlinkHref={`${IconcloseModal}#icon-x`} />
                  </svg>
                </button>
                <p className="modal__Intake">
                  Your recommended daily calorie intake is{' '}
                </p>
                <div className="modal_calories_container">
                  <p className="modal__calories">{calories} </p>
                  <p className="modal__calories-units">kcal </p>
                </div>
                <h3 className="modal__foods">Foods you should not eat</h3>
                <ul className="modal__list_foods">
                  {products.slice(0, 4).map((product, index) => (
                    <li className="List__Products" key={product._id}>
                      {index + 1} . {product.title}
                    </li>
                  ))}
                </ul>
                <Button
                  className={'modal__button-start'}
                  text={'Start losing weight'}
                  fontFamily={'Verdana'}
                  fontSize={14}
                  weight={700}
                  primaryColor={'#FC842D'}
                  secondaryColor={'#FFF'}
                  width={210}
                  height={44}
                  onClick={closeModal}
                />
              </div>
            )}
          </Modal>
        </div>
        {isLogged && <Sidebar />}
      </div>
    </HomeStyled>
  );
};

export default Home;

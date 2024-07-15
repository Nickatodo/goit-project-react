import React from 'react';
import HomeStyled from './HomeStyled';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Calories"
      >
        <h2 className='Result'>Resultados</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error : {error.message}</p>
        ) : (
          <div>
            <p className='Intake'>Tu ingesta diaria recomendad de calorias es </p>
            <p className='Calories'>{calories} kcal</p>
            <h3 className='Foods'>Alimentos que no deberias comer</h3>
            <ul className='List__Foods'>
              {products.slice(0, 4).map(product => (
                <li className='List__Products' key={product._id}>{product.title}</li>
              ))}
            </ul>
            <button className="Modal-button_close" onClick={closeModal}>Comienza a perder peso</button>
          </div>
        )}
      </Modal>
    </HomeStyled>
  );
};

export default Home;

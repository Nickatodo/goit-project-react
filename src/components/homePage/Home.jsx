import React from 'react';
import HomeStyled from './HomeStyled';

const Home = () => {
  return (
    <HomeStyled>
      <h1 className="title">
        Calcula tu ingesta diaria de calorías ahora mismo
      </h1>

      <form className="form" action="/submit" method="POST">
        <div className="form-group">
          <input type="number" id="height" name="height" required />
          <label htmlFor="height">Altura*</label>
        </div>

        <div className="form-group">
          <input
            type="number"
            id="desired-weight"
            name="desired-weight"
            required
          />
          <label htmlFor="desired-weight">Peso deseado*</label>
        </div>

        <div className="form-group">
          <input type="number" id="age" name="age" required />
          <label htmlFor="age">Edad*</label>
        </div>

        <div className="form-group">
          <input
            type="number"
            id="current-weight"
            name="current-weight"
            required
          />
          <label htmlFor="current-weight">Peso actual*</label>
        </div>

        <div className="radio-group">
          <label className="radio-label">
            <input type="radio" id="option1" name="option" value="1" required />
            1
          </label>

          <label className="radio-label">
            <input type="radio" id="option2" name="option" value="2" />2
          </label>

          <label className="radio-label">
            <input type="radio" id="option3" name="option" value="3" />3
          </label>

          <label className="radio-label">
            <input type="radio" id="option4" name="option" value="4" />4
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="blood-group">Grupo sanguíneo*</label>
        </div>

        <button type="submit" className="form-button_home">
          Comienza a perder peso
        </button>
      </form>
    </HomeStyled>
  );
};

export default Home;

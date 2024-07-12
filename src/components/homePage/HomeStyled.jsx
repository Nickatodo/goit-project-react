import styled from 'styled-components';
import hojasBackground from '../../img/hojas.png';
import fresasBackground from '../../img/fresas.png';
import bananaBackground from '../../img/Banana.png';
import vectorBackground from '../../img/Vector fondo.png';

const HomeStyled = styled.div`
  font-family: 'Jost', sans-serif;
  width: 100%;
  height: 100vh;
  background-image: url(${hojasBackground}), url(${fresasBackground}),
    url(${bananaBackground}), url(${vectorBackground});
  background-size: 750px 850px, 280px 270px, 500px 450px, 700px 816px;
  background-position: center top, bottom right, right -15%, right bottom;
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;

  h1 {
    max-width: 608px;
    height: 85px;
    padding: 70px 0 50px 15px;
    font-weight: 700;
    font-size: 34px;
    line-height: 1.4;

    @media screen and (max-width: 768px) {
      font-size: 18px;
      padding: 30px 20px 0 20px;
      text-align: center;
    }
  }

  form {
    max-width: 608px;
    max-height: 343px;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0.04em;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 0 0 0 15px;

    @media screen and (max-width: 768px) {
      max-width: 240px;
      max-height: 269px;
      padding: 0;
    }
  }

  .form-group {
    width: 240px;
    position: relative;
    margin-bottom: 20px;

    input[type='number'],
    select {
      padding: 7px 0px;
      border: none;
      border-bottom: 1px solid rgba(224, 224, 224, 1);
      font-size: 16px;
      outline: none;
      background-color: transparent;
    }

    .form-label {
      position: absolute;
      top: 0;
      left: 5px;
      font-size: 14px;
      color: rgba(155, 159, 170, 1);
      pointer-events: none;
      transition: 0.2s;
    }

    input:focus + .form-label,
    input:valid + .form-label,
    select:focus + .form-label,
    select:valid + .form-label {
      top: -20px;
      left: 0;
      font-size: 12px;
      color: rgba(155, 159, 170, 1);
    }

    &-radio {
      top: -40px;
      border-top: 1px solid rgba(224, 224, 224, 1);
      padding: 8px 0;
      display: flex;
      gap: 28px;
    }
  }

  .radio-option {
    width: 240px;
    color: rgba(155, 159, 170, 1);
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 10px;

    input[type='radio'] {
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1px solid rgba(155, 159, 170, 1);
      outline: none;
      transition: border-color 0.3s ease-in-out;
      margin: 0;

      &:checked {
        background-color: rgba(252, 132, 45, 1);

        & + .radio-label {
          color: rgba(252, 132, 45, 1); /* Color por defecto del número */
        }
      }
    }

    .radio-label {
      color: rgba(155, 159, 170, 1); /* Color por defecto del número */
    }
  }

  button {
    padding: 10px 20px;
    margin-top: 16px;
    background-color: rgba(252, 132, 45, 1);
    color: rgba(255, 255, 255, 1);
    border: none;
    cursor: pointer;
    border-radius: 20px;
    width: 210px;
    height: 43px;
    font-weight: 700;
    font-size: 13px;
    line-height: 1.2;
    letter-spacing: 0.03em;
    position: relative;
    left: 50%;

    &:hover {
      box-shadow: 0px 4px 10px 0px rgba(252, 132, 45, 0.5);
    }

    @media screen and (max-width: 600px) {
      margin: 0 0 16px 0;
      left: auto;
      width: 100%;
    }
  }

  @media screen and (max-width: 900px) and (min-width: 600px) {
    height: 1024px;
    background-image: url(${hojasBackground}), url(${fresasBackground}),
      url(${bananaBackground}), url(${vectorBackground});
    background-size: 60% auto, 250px 250px, 450px 450px, 500px 616px;
    background-position: left bottom, 90% 75%, right 115%, right 125%;
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  }

  @media screen and (max-width: 600px) {
    height: auto;
    background-image: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default HomeStyled;

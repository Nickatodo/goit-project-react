import styled from 'styled-components';
import hojasBackground from '../../img/hojas.png';
import fresasBackground from '../../img/fresa.png';
import bananaBackground from '../../img/banana1.png';
import vectorBackground from '../../img/formaFondo.png';

const HomeStyled = styled.div`
  position: relative;
  top: 0;
  font-family: 'Jost', sans-serif;
  padding-top: 293px;
  width: 100%;
  height: calc(100vh - 293px);
  overflow-y: auto;

  background-image: url(${hojasBackground}), url(${fresasBackground}),
    url(${bananaBackground}), url(${vectorBackground});
  background-size: 746px 846px, 286px 279px, 773px 552px, 602px 816px;
  background-position: calc(100% - 195px) calc(-26px),
    calc(100% - 36px) calc(506px), calc(100% + 275px) calc(-102px),
    right calc(34px);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;

  @media screen and (max-width: 768px) {
    background-size: 740px 842px, 291px 284px, 773px 552px, 553px 750px;
    background-position: calc(100% - 12px) calc(-97px),
      calc(100% + 26px) calc(461px), calc(100% + 249px) calc(593px),
      calc(100% + 32px) calc(461px);
    padding-top: 180px;
    height: calc(100vh - 180px);
  }

  @media screen and (max-width: 320px) {
    background: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 112px;
  }

  .title {
    max-width: 608px;
    margin: 0 16px 68px 16px;
    font-weight: 700;
    font-size: 34px;
    line-height: 1.4;

    @media screen and (max-width: 768px) {
      max-width: 704px;
      margin: 0 32px 68px 32px;
    }

    @media screen and (max-width: 320px) {
      max-width: 280px;
      min-width: 240px;
      margin: 32px 20px 34px 20px;
      font-size: 18px;
    }
  }

  .form {
    max-width: 608px;
    display: flex;
    margin: 0 16px;
    flex-direction: column;

    @media screen and (max-width: 768px) {
      margin: 0 32px;
      max-width: 704px;
    }

    @media screen and (max-width: 320px) {
      margin: 0 20px;
      width: 240px;
    }
  }

  .form-inputs {
    width: 100%;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0.04em;
    display: flex;
    flex-wrap: wrap;
    gap: 40px 30px;

    @media screen and (max-width: 768px) {
    }

    @media screen and (max-width: 320px) {
    }
  }

  .form-btn {
    width: 100%;
    display: flex;
    justify-content: end;
    margin-top: 60px;

    @media screen and (max-width: 768px) {
      justify-content: start;
    }

    @media screen and (max-width: 320px) {
      justify-content: center;
      margin-top: 40px;
    }
  }

  .form-group {
    width: 240px;
    position: relative;

    input[type='number'] {
      width: 100%;
      padding: 7px 0px;
      border: none;
      border-bottom: 1px solid #e0e0e0;
      font-size: 16px;
      outline: none;
      background-color: transparent;
    }

    .form-label {
      position: absolute;
      top: 0;
      left: 5px;
      font-size: 14px;
      color: #9b9faa;
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
      color: #9b9faa;
    }

    &-radio {
      top: -40px;
      border-top: 1px solid #e0e0e0;
      padding: 8px 0;
      display: flex;
      gap: 28px;
    }
  }

  .radio-option {
    width: 240px;
    color: #9b9faa;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 10px;

    input[type='radio'] {
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1px solid #9b9faa;
      outline: none;
      transition: border-color 0.3s ease-in-out;
      margin: 0;

      &:checked {
        background-color: #fc842d;

        & + .radio-label {
          color: #fc842d;
        }
      }
    }

    .radio-label {
      color: #9b9faa;
    }
  }
`;

export default HomeStyled;

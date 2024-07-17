// SidebarStyled.jsx
import styled from 'styled-components';

const SidebarStyled = styled.div`
  width: 517px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f1f3;
  gap: 60px;

  .summary {
    width: 288px;
    max-height: 180px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    overflow-y: auto;
  }

  .summary-title {
    width: 100%;
    font-family: Verdana;
    font-size: 14px;
    font-weight: 700;
    line-height: 17.01px;
    letter-spacing: 0.04em;
    color: #212121;
  }

  .summary-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .summary-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .summary-label {
    width: 65%;
    text-align: left;
  }

  .summary-value {
    width: 35%;
    text-align: right;
  }

  .summary-label,
  .summary-value {
    font-family: Verdana;
    font-size: 14px;
    font-weight: 400;
    line-height: 17.01px;
    letter-spacing: 0.04em;
    text-align: left;
    color: #9b9faa;
  }

  @media screen and (max-width: 768px) {
    position: relative;
    padding-left: 32px;
    width: 100%;
    flex-direction: row;
    gap: 80px;
    align-items: center;
    justify-content: start;
  }

  @media screen and (max-width: 320px) {
    flex-direction: column;
    padding: 50px 20px;
  }

  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(252, 132, 45, 0.5);
    border-radius: 10px;
    border: none;
  }

  ::-webkit-scrollbar-track {
    background-color: #f0f1f3;
    border-radius: 10px;
    border: none;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }
`;

export default SidebarStyled;

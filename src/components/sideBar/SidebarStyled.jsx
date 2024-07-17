// SidebarStyled.jsx
import styled from 'styled-components';

const SidebarStyled = styled.div`
  background-color: #f0f1f3;
  background-size: cover;
  background-position: center;
  width: 600px; /* Ajusta el ancho del Sidebar según tus necesidades */
  height: 100vh;
  position: fixed; /* Asegura que el Sidebar esté fijo en la página */
  top: 0;
  right: 0; /* Sidebar a la derecha */
  display: flex;
  flex-direction: column;
  padding: 300px 40px; /* Ajusta el padding para el contenido interno */

  .logo {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .menu {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .menu-item {
    font-size: 18px;
    color: black; /* Cambia el color del texto según el diseño */
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2); /* Fondo al pasar el ratón */
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  .summary {
    margin-top: 20px; /* Espacio arriba del resumen */
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.2); /* Fondo semitransparente */
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-align: center;
  }

  .summary-header {
    font-size: 18px;
    font-weight: 700;
    color: black; /* Color del texto del encabezado */
  }

  .summary-content {
    font-size: 14px;
    color: black; /* Color del texto del contenido */
  }

  .summary-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 5px 0;
  }

  .summary-label {
    font-size: 14px;
    color: black; /* Color del texto de las etiquetas */
  }

  .summary-value {
    font-size: 14px;
    color: black; /* Color del texto de los valores */
  }

  @media screen and (max-width: 768px) {
    width: 200px; /* Ancho reducido para pantallas más pequeñas */
    padding: 10px; /* Menos padding en pantallas más pequeñas */
  }

  @media screen and (max-width: 480px) {
    width: 150px; /* Ancho aún más reducido para pantallas móviles */
    padding: 5px; /* Menos padding en pantallas móviles */
  }
`;

export default SidebarStyled;

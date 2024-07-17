/**
 *Botón personalizable
 *@param {string} type - Tipo de botón (e.g. "button","submit")
 *@param {string} text - Texto del botón (e.g. "Click me","Hello World!")
 *@param {string} icon - Clases del ícono (e.g. fas fa-arrow-right)
 *@param {string} fontFamily - Familia de fuentes del botón (e.g. 'Arial', 'Helvetica')
 *@param {number} fontSize - Tamaño de fuente del botón en px (e.g. 16, 24)
 *@param {number} weight - Peso de la fuente del botón (e.g. 400, 600, 900)
 *@param {string} primaryColor - Color principal del botón (e.g. '#007bff', 'blue')
 *@param {string} [secondaryColor] - Color secundario del botón (opcional) (e.g. '#ff69b4', 'pink')
 *@param {boolean} [secondary] - Indica si el botón es secundario (opcional) (e.g. true, false)
 *@param {function} onClick - Función que se ejecutará cuando se haga clic en el botón
 *@param {string} [className] - Clase CSS adicional para personalizar el botón
 *@param {...object} [props] - Propiedades adicionales que se pueden pasar al botón */

import PropTypes from 'prop-types';
import { hexToRgba } from '../../utils/utilFunctions';
import './Button.css';

const Button = ({
  type,
  text,
  fontFamily,
  fontSize,
  weight,
  primaryColor,
  secondaryColor,
  secondary,
  shadowOpacity,
  width,
  height,
  onClick,
  className,
  children,
  ...props
}) => {
  const classes = ['btn', secondary ? 'btn-secondary' : '', className]
    .filter(Boolean)
    .join(' ');

  const shadowColor = hexToRgba(primaryColor, shadowOpacity);

  return (
    <button
      type={type}
      className={classes}
      style={{
        '--font-family': fontFamily,
        '--font-size': fontSize,
        '--weight': weight,
        '--primary-color': primaryColor,
        '--secondary-color': secondaryColor,
        '--shadow-color': shadowColor,
        '--width': width,
        '--height': height,
      }}
      onClick={onClick}
      {...props}
    >
      <span>
        {text}
        {children}
      </span>
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  weight: PropTypes.number,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  secondary: PropTypes.bool,
  shadowOpacity: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.shape({
      min: 0,
      max: 1,
    }),
  ]),
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  type: 'button',
  text: 'Click me!',
  fontFamily: 'Arial',
  fontSize: 16,
  weight: 400,
  primaryColor: '#000',
  secondaryColor: '#fff',
  secondary: false,
  shadowOpacity: 1,
  onClick: () => {},
  className: '',
};

export default Button;

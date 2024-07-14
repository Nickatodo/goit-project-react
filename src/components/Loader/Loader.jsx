import { useTrail, a } from '@react-spring/web';
import PropTypes from 'prop-types';

import './Loader.css';

const Loader = ({ text = '' }) => {
  let items = text.includes(' ') ? text.split(' ') : [text];
  const trail = useTrail(items.length, {
    config: { mass: 20, tension: 2000, friction: 150 },
    opacity: 1,
    x: 0,
    height: 200,
    from: { opacity: 0, x: 50, height: 0 },
    to: { opacity: 1, x: 0, height: 200 },
    delay: 1000,
    loop: true,
  });

  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className="trailsText" style={style}>
          <a.div
            style={{
              height,
              color: index % 2 !== 0 ? '#FC842D' : '#212121',
              opacity: style.opacity,
            }}
          >
            {items[index]}
          </a.div>
        </a.div>
      ))}
    </div>
  );
};

Loader.propTypes = {
  text: PropTypes.string,
};

export default Loader;

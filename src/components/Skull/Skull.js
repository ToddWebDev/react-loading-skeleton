import React from 'react';
import PropTypes from 'prop-types';
// import { builtinModules } from 'module';

class Skull extends React.Component {
  getColor = () => '#d1d2d4';
  getShape = () => {
    if(this.props.shape === 'square'){
      return '4px';
    }
    else {
      return '50%';
    }
  };

  render() {
    return (
      <div>
        <div style={{
          height: '100px',
          width: '100px',
          borderRadius: this.getShape(),
          backgroundColor: this.getColor()
        }} />
      </div>
    );
  }
}

Skull.propTypes = {
  /** Skull Shape */
  shape: PropTypes.string,
};

Skull.defaultProps = {
  shape: 'round',
};

export default Skull;
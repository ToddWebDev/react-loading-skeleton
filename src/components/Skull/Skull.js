import React from 'react';
import PropTypes from 'prop-types';


class Skull extends React.Component {
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
          backgroundColor: '#d1d2d4'
        }} />
      </div>
    );
  }
}

Skull.propTypes = {
  /** Skull Shape  */
  shape: PropTypes.oneOf(['round','square']),
};

Skull.defaultProps = {
  shape: 'round',
};

export default Skull;
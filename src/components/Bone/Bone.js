import React from 'react';
import PropTypes from 'prop-types';

class Bone extends React.Component {
  render() {
    const {width, height} = this.props;
    return (
       <div style={{
        borderRadius: '7px',
        width: width+'%',
        height: height,
        marginTop: 15,
        backgroundColor: '#d1d2d4'
        }} ></div>
    );
  }
}

Bone.propTypes = {
  /** Bone width by percentage */
  width: PropTypes.number,

  /** Bone height by pixels */
  height: PropTypes.number
};

Bone.defaultProps = {
  width: 100,
  height: 10
};

export default Bone;
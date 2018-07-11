import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

class Bone extends React.Component {
  render() {
    const {width, height} = this.props;
    return (
       <div style={{
        borderRadius: '4px',
        width: width+'%',
        height: height,
        marginTop: 15,
        backgroundColor: 'rgba(0,0,0,0.1)'
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
  height: 15
};

export default Bone;
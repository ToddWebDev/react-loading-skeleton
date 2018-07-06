import React from 'react';
import PropTypes from 'prop-types';
// import { builtinModules } from 'module';

class Bone extends React.Component {
  getColor = () => '#d1d2d4';

  render() {
    const {width, height} = this.props;
    return (
      <div style={{marginTop: 0, marginBottom: 0}}>
        <div style={{
          borderRadius: '7px',
          width: width,
          height: height,
          backgroundColor: this.getColor()
        }} />
      </div>
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
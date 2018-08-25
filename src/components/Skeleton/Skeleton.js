import React, { Component } from "react";
import PropTypes from "prop-types";

import Bone from "../Bone";
import Skull from "../Skull";

const skeletonFlexRowStyle = {
  display: 'flex',
  flexDirection: 'row'
};

const boneFlexRowStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  width: '90%',
  marginLeft: '15px'
};

/** The Skeleton can be used to dynamically generate bones.  */
class Skeleton extends Component {
  getAnimation = () => this.props.animate ? 'blink' : '';

  render() {
    const { skull, amount, direction } = this.props;
    const skeleton = [];
    const bones = [];
    if (skull) {
      skeleton.push(<Skull key={'0-0'} />);
    }
    for (let i = 0; i < amount; i++) {
      bones.push(<Bone key={i} />);
    }
    return (
      <div className={this.getAnimation()} style={direction === 'row' ? skeletonFlexRowStyle : null} >
        <div>{skeleton}</div>
        <div style={direction === 'row' ? boneFlexRowStyle : null}>{bones}</div>
      </div>
    );
  }
}

Skeleton.propTypes = {
  /** Show Skull */
  skull: PropTypes.bool,
  /** Amount of Bones */
  amount: PropTypes.number,
  /** Fade bones in and out  */
  animate: PropTypes.bool,
  /** Column or Row   */
  direction: PropTypes.oneOf(['column','row'])
};

Skeleton.defaultProps = {
  skull: false,
  amount: 1,
  animate: true,
  direction: 'column'
};

export default Skeleton;

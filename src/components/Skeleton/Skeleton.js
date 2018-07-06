import React, { Component } from "react";
import PropTypes from "prop-types";

import Bone from "../Bone";
import Skull from "../Skull";

/** The Skeleton can be used to dynamically generate bones.  */
class Skeleton extends Component {
  getAnimation = () => this.props.animate ? 'blink' : '';

  render() {
    const { skull, amount } = this.props;
    const bones = [];
    if (skull) {
      bones.push(<Skull key={'0-0'} />);
    }
    for (let i = 0; i < amount; i++) {
      bones.push(<Bone key={i} />);
    }
    return <div className={this.getAnimation()}>{bones}</div>;
  }
}

Skeleton.propTypes = {
  /** Show Skull */
  skull: PropTypes.bool,
  /** Amount of Bones */
  amount: PropTypes.number,
  /** Fade bones in and out  */
  animate: PropTypes.bool
};

Skeleton.defaultProps = {
  skull: false,
  amount: 1,
  animate: true
};

export default Skeleton;

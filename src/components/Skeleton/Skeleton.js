import React, { Component } from "react";
import PropTypes from "prop-types";
import Bone from "../Bone";

/** The Skeleton is the core loading component that contains the bones */
class Skeleton extends Component {
  render() {
    const { amount } = this.props;
    const bones = [];
    for (let i = 0; i < amount; i++) {
      bones.push(<Bone key={i} />);
    }
    return <div>{bones}</div>;
  }
}

Skeleton.propTypes = {
  /** Amount of Bones */
  amount: PropTypes.number
};

Skeleton.defaultProps = {
  amount: 1
};

export default Skeleton;

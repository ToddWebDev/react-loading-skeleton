import React from 'react';
import PropTypes from 'prop-types';

/** The Skeleton is the core loading component that contains the bones */
function Skeleton({amount}) {
    return <div>{amount}</div>
}

Skeleton.propTypes = {
    /** Amount of Bones */
    amount: PropTypes.number
};

Skeleton.defaultProps = {
    amount: 1
};

export default Skeleton;
import React from 'react';
import PropTypes from 'prop-types';

/** Bone is the core loading component with a custom width */
function Bone({width}) {
    return <div>{width}</div>
}

Bone.propTypes = {
    /** Width of Bone */
    width: PropTypes.string
};

Bone.defaultProps = {
    width: 'A typical bone.'
};

export default Bone;
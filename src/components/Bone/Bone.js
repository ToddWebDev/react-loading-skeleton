import React from 'react';
import PropTypes from 'prop-types';

function Bone({message}) {
    return <div>Hello {message}</div>
}

Bone.propTypes = {
    message: PropTypes.string
};

export default Bone;
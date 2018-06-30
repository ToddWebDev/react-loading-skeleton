import React from 'react';

function Bone({message}) {
    return <div>Hello {message}</div>
}

Bone.propTypes = {
    message: PropTypes.string
};

export default Bone;
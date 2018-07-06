import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 0;
  margin-bottom: 0;
`;

const BoneAndStyle = styled.div`
  border-radius: 7px;
  width: ${props => props.width ? props.width : '100'}%;
  height: ${props => props.height ? props.height : '10'}px;
  background-color: #d1d2d4;
`;

class Bone extends React.Component {
  render() {
    return (
      <Container>
        <BoneAndStyle />
      </Container>
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
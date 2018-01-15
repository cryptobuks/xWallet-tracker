import * as React from 'react';
import styled from 'styled-components';

const P = styled.p`
  color: red;
  margin-top: 5rem;
`;

class Hello extends React.Component {
  render() {
    return (
      <div className="hello">
      <P>hello world</P>  
      </div>
    );
  }
}

export default Hello;

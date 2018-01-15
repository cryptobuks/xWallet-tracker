import * as React from 'react';
import P, { Title } from './styled';

class Hello extends React.Component {
  render() {
    return (
      <div className="hello">
      <Title color="black">Title</Title>  
      <P color="green">hello world</P>  
      </div>
    );
  }
}

export default Hello;

import * as React from 'react';
import { Valute } from './styled';

class Price extends React.Component<Props, any> {

  render() {
    return (
      <Valute>
        <p>{this.props.name}</p>
        <p>{this.props.price}</p>
      </Valute>
    );
  }
}

interface Props {
  price: string;
  name: string;
}

export default Price;
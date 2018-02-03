import * as React from 'react';
import Price from '../Price';
import { List } from './styled';

class PriceList extends React.Component<any, State> {

  state = {
    list: [
      {
        name: 'test1',
        price: '123',
    }, {
        name: 'test2',
        price: '256',  
    }]
  };

  render() {
    return (
      <List>
        {this.state.list.map((element) => <Price key={element.name} price={element.price} name={element.name} />)}
      </List>
    );
  }
}

interface State {
  list: Valute[];
}

interface Valute {
  name: string;
  price: string;
}

export default PriceList;
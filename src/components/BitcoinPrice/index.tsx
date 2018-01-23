import * as React from 'react';
import { GetPrice } from '../../shared/api/blockhain.info';

class BitcoinPrice extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {loading: 'Loading...'};
    setInterval(() => {
      this.getPrice();
    },          10000);
    this.getPrice();
  }

  async getPrice() {
    const data = await GetPrice();
    this.setState({ price: data});
  }

  render() {
    return (<p>{this.state.price || this.state.loading}</p>
    );
  }
}
interface State {
  price?: string;
  loading: string;
}

export default BitcoinPrice;
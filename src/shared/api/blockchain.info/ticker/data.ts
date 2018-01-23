interface Rates {
  '15m': number;
  'last': number;
  'buy': number;
  'sell': number;
  'symbol': string;
}

export interface Ticker {
  USD: Rates;
  RUB: Rates;
}

const ValutaList = ['USD', 'RUB'];

export default {
  ValutaList
};

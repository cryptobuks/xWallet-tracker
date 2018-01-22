import Http from '../../http';
import blockchainInfo from '../';
import { Ticker } from './data';

const defaultValuta = 'RUB';

async function get() {
  const data = await Http.get(`${blockchainInfo.uri}ticker`) as Ticker;
  return data;
}

async function ticker(valuta: string= defaultValuta): Promise<string> {
  const data = await get();
  if (typeof data[valuta] !== 'object') { valuta = defaultValuta; }
  try {
    return `${data[valuta]['15m'].toLocaleString()} ${data[valuta].symbol}`;
  } catch {
    return '';
  }
}

export default ticker;
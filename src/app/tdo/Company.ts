import {Phone} from './Phone';
import {Address} from './Address';

export class Company {
  id: string;
  name: string;
  description: string;
  address: Address;
  contacts: Array<Phone>;
}

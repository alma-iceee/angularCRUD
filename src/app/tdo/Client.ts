import {Gender} from './Gender';
import {Address} from 'cluster';
import {Phone} from './Phone';
import {Character} from './Character';

export class Client {
  id: string;
  surname: string;
  name: string;
  patronymic: string;
  gender: Gender;
  birthDate: string;
  characterId: string;
  addressReg: Address;
  addressFact: Address;
  phones: Array<Phone>;
  characters: Array<Character>;
}

import {Info} from './info';

export interface Response<T> {
  info: Info;
  results: T
}

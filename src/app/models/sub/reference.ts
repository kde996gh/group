import { Identifier } from './identifier';

export interface Reference {
  reference?: string;
  type?: string;
  identifier?: Identifier;
  display?: string;
}

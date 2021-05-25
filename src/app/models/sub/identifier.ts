import { CodeableConcept } from './codeableconcept';
import { Period } from './period';
import { Reference } from './reference';


export interface Identifier {
  use?: 'usual' | 'official' | 'temp' | 'secondary' | 'old';
  type?: CodeableConcept;
  system?: string;
  value?: string;
  period?: Period;
  assigner?: Reference | string;
}

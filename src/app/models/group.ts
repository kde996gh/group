import { Identifier } from './sub/identifier';
import { CodeableConcept } from './sub/codeableconcept';
import { Period } from './sub/period';
import { Quantity } from './sub/quantity';
import { Reference } from './sub/reference';

export interface Group {
  resourceType?: string;
  id?: string;
  text?: StandardText;
  extension?: Extension[];
  identifier?: Identifier[];
  active?: boolean;
  type:
    | 'person'
    | 'animal'
    | 'practitioner'
    | 'device'
    | 'medication'
    | 'substance';
  actual: boolean;
  code?: CodeableConcept;
  name?: string;
  quantity?: number;
  managingEntity?: Reference | string;
  characteristic?: characteristicEntity[];
  member?: memberEntity[];
}

export interface characteristicEntity {
  code: CodeableConcept;
  value: CodeableConcept | boolean | Quantity | Range | Reference | string;
  exclude: boolean;
  period?: Period;
}

export interface memberEntity {
  entity: Reference | string;
  period?: Period;
  inactive?: boolean;
}

export interface StandardText {
  status: string;
  div: string;
}

export interface Extension {
  url: string;
  value?: any;
}

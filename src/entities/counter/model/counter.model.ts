import { types } from 'mobx-state-tree';
import { COUNTER_TYPES, type TCounterType } from '@shared/lib/counterTypes';

const isCounterType = (value: string): value is TCounterType =>
  (COUNTER_TYPES as readonly string[]).includes(value);

export const CounterModel = types
  .model('Counter', {
    id: types.identifier,
    _type: types.array(types.string),
    area: types.model({ id: types.string }),
    is_automatic: types.maybeNull(types.boolean),
    communication: types.maybeNull(types.string),
    description: types.maybeNull(types.string),
    serial_number: types.maybeNull(types.string),
    installation_date: types.maybeNull(types.string),
    brand_name: types.maybeNull(types.string),
    model_name: types.maybeNull(types.string),
    initial_values: types.array(types.number),
  })
  .views((self) => ({
    get counterTypes() {
      return self._type.filter(isCounterType);
    },
  }));

import { types } from 'mobx-state-tree';

export const AreaModel = types.model('Area', {
  id: types.identifier,
  str_number_full: types.string,
  house: types.model({
    address: types.string,
    id: types.string,
  }),
});

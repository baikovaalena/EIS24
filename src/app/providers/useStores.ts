import { createContext, useContext } from 'react';
import { areasStore, type AreasStore } from '@entities/area';
import { countersStore, type CountersStore } from '@entities/counter';
import type { Instance } from 'mobx-state-tree';

export interface IStoreContext {
  countersStore: Instance<typeof CountersStore>;
  areasStore: Instance<typeof AreasStore>;
}

export const StoreContext = createContext<IStoreContext>({
  countersStore,
  areasStore,
});

export const useStores = () => useContext(StoreContext);

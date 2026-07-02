import type { ReactNode } from 'react';
import { areasStore } from '@entities/area';
import { countersStore } from '@entities/counter';
import { StoreContext } from './useStores';

interface IProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: IProps) => (
  <StoreContext.Provider value={{ countersStore, areasStore }}>
    {children}
  </StoreContext.Provider>
);

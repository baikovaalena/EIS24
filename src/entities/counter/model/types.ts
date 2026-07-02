import type { Instance, SnapshotIn } from 'mobx-state-tree';
import type { CounterModel } from './counter.model';

export type TCounter = Instance<typeof CounterModel>;

export type TCounterSnapshot = SnapshotIn<typeof CounterModel>;

export interface IMetersResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: TCounterSnapshot[];
}

import type { Instance, SnapshotIn } from 'mobx-state-tree';
import type { IPaginatedResponse } from '@shared/api/types';
import type { CounterModel } from './counter.model';

export type TCounter = Instance<typeof CounterModel>;

export type TCounterSnapshot = SnapshotIn<typeof CounterModel>;

export type IMetersResponse = IPaginatedResponse<TCounterSnapshot>;

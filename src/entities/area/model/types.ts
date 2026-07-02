import type { Instance, SnapshotIn } from 'mobx-state-tree';
import type { AreaModel } from '@entities/area/model/area.model';

export type TArea = Instance<typeof AreaModel>;
export type TAreaSnapshot = SnapshotIn<typeof AreaModel>;

export interface IAreasResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: TAreaSnapshot[];
}

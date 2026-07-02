import type { Instance, SnapshotIn } from 'mobx-state-tree';
import type { IPaginatedResponse } from '@shared/api/types';
import type { AreaModel } from '@entities/area/model/area.model';

export type TArea = Instance<typeof AreaModel>;
export type TAreaSnapshot = SnapshotIn<typeof AreaModel>;

export type IAreasResponse = IPaginatedResponse<TAreaSnapshot>;

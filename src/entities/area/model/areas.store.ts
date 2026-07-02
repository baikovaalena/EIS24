import { flow, types } from 'mobx-state-tree';
import { fetchAreas } from '../api/areas.api';
import { AreaModel } from './area.model';
import type { IAreasResponse } from './types';

export const AreasStore = types
  .model('AreasStore', {
    items: types.map(AreaModel),
    failedIds: types.array(types.string),
  })
  .views((self) => ({
    getAddress(areaId: string): string {
      if (self.failedIds.includes(areaId)) return 'Адрес недоступен';
      const area = self.items.get(areaId);
      if (!area) return '—';
      return `${area.house.address}, ${area.str_number_full}`;
    },
  }))
  .actions((self) => ({
    loadAreas: flow(function* loadAreas(ids: string[]) {
      const unknownIds = ids.filter(
        (id) => !self.items.has(id) && !self.failedIds.includes(id)
      );
      if (!unknownIds.length) return;

      try {
        const data: IAreasResponse = yield fetchAreas(unknownIds);
        data.results.forEach((area) => self.items.set(area.id, area));

        const loadedIds = new Set(data.results.map((a) => a.id));
        unknownIds
          .filter((id) => !loadedIds.has(id))
          .forEach((id) => self.failedIds.push(id));
      } catch {
        unknownIds.forEach((id) => self.failedIds.push(id));
      }
    }),
  }));

export const areasStore = AreasStore.create({ items: {} });

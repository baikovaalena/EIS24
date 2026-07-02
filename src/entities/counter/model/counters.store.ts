import { cast, flow, types } from 'mobx-state-tree';
import { fetchCounters } from '../api/counters.api';
import { CounterModel } from './counter.model';
import type { IMetersResponse } from './types';

const PAGE_LIMIT = 20;

export const CountersStore = types
  .model('CountersStore', {
    items: types.array(CounterModel),
    count: 0,
    limit: PAGE_LIMIT,
    offset: 0,
    isLoading: false,
    error: types.maybeNull(types.string),
  })
  .views((self) => ({
    get page() {
      return self.offset / self.limit + 1;
    },
    get totalPages() {
      return Math.max(1, Math.ceil(self.count / self.limit));
    },
  }))
  .actions((self) => {
    let currentRequestId = 0;

    const loadPage = flow(function* loadPage(offset = self.offset) {
      const requestId = ++currentRequestId;
      const isStale = () => requestId !== currentRequestId;

      self.isLoading = true;
      self.error = null;

      try {
        const data: IMetersResponse = yield fetchCounters(self.limit, offset);
        if (isStale()) return;

        self.items = cast(data.results);
        self.count = data.count;
        self.offset = offset;
      } catch (error) {
        if (isStale()) return;
        self.error =
          error instanceof Error
            ? error.message
            : 'Не удалось загрузить счётчики';
      } finally {
        if (!isStale()) {
          self.isLoading = false;
        }
      }
    });

    const setPage = (page: number) => {
      const normalizedPage = Math.min(Math.max(page, 1), self.totalPages);
      loadPage((normalizedPage - 1) * self.limit);
    };

    return { loadPage, setPage };
  });

export const countersStore = CountersStore.create();

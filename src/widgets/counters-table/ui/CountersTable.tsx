import { useEffect } from 'react';
import clsx from 'clsx';
import { reaction } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useSearchParams } from 'react-router-dom';
import { areasStore } from '@entities/area';
import { CounterRow, countersStore } from '@entities/counter';
import { DeleteCounter } from '@features/delete-counter';
import { Loader } from '@shared/ui/Loader';
import { Pagination } from '@shared/ui/Pagination';
import './CountersTable.scss';

export const CountersTable = observer(() => {
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    return reaction(
      () => countersStore.items.map((c) => c.area.id),
      (ids) => {
        const uniqueIds = [...new Set(ids)];
        if (uniqueIds.length) void areasStore.loadAreas(uniqueIds);
      },
      { fireImmediately: true },
    );
  }, []);

  return (
    <div className="counters-table">
      <div className="counters-table__scroll">
        <table className="counters-table__table">
          <thead>
            <tr>
              <th scope="col">№</th>
              <th scope="col">Тип</th>
              <th scope="col">Дата установки</th>
              <th scope="col">Автоматический</th>
              <th scope="col">Текущие показания</th>
              <th scope="col">Адрес</th>
              <th scope="col">Примечание</th>
              <th scope="col" aria-label="Действия" />
            </tr>
          </thead>

          <tbody>
            {countersStore.items.map((counter, index) => (
              <CounterRow
                key={counter.id}
                counter={counter}
                index={countersStore.offset + index + 1}
                address={areasStore.getAddress(counter.area.id)}
                deleteAction={<DeleteCounter counterId={counter.id} />}
              />
            ))}

            {countersStore.isLoading && (
              <tr className="counters-table__message-row">
                <td colSpan={8}>
                  <Loader />
                </td>
              </tr>
            )}

            {countersStore.error && (
              <tr
                className={clsx(
                  'counters-table__message-row',
                  'counters-table__message-row_error',
                )}
              >
                <td colSpan={8}>{countersStore.error}</td>
              </tr>
            )}

            {!countersStore.isLoading &&
              !countersStore.error &&
              !countersStore.items.length && (
                <tr className="counters-table__message-row">
                  <td colSpan={8}>Счётчики не найдены</td>
                </tr>
              )}
          </tbody>
          <tfoot>
            <tr>
              <td>
                <Pagination
                  page={countersStore.page}
                  totalPages={countersStore.totalPages}
                  onPageChange={(p) => {
                    setSearchParams({ page: String(p) });
                    countersStore.setPage(p);
                  }}
                />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
});

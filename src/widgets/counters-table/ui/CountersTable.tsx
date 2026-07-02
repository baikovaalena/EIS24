import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { areasStore } from '@entities/area';
import { CounterRow, countersStore, type TCounter } from '@entities/counter';
import { DeleteCounter } from '@features/delete-counter';
import { formatCounterType } from '@shared/lib/formatCounterType';
import { formatDate } from '@shared/lib/formatDate';
import { Loader } from '@shared/ui/Loader';
// import { Pagination } from '@shared/ui/Pagination';
import './CountersTable.scss';

const formatCurrentValue = (counter: TCounter) =>
  counter.initial_values.length ? counter.initial_values.join(', ') : '-';

const formatIsAutomatic = (value: boolean | null): string => {
  if (value === null) {
    return '-';
  }
  return value ? 'да' : 'нет';
};

export const CountersTable = observer(() => {
  useEffect(() => {
    if (!countersStore.items.length && !countersStore.isLoading) {
      void countersStore.loadPage(0);
    }
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
                address={areasStore.getAddress(counter.area.id)}
                currentValue={formatCurrentValue(counter)}
                deleteAction={<DeleteCounter />}
                description={counter.description?.trim() || '-'}
                index={countersStore.offset + index + 1}
                installationDate={formatDate(counter.installation_date)}
                isAutomatic={formatIsAutomatic(counter.is_automatic)}
                typeLabel={formatCounterType(counter.counterTypes)}
                type={counter.counterTypes[0]}
              />
            ))}

            {countersStore.isLoading && (
              <tr className="counters-table__message-row">
                <td>
                  <Loader />
                </td>
              </tr>
            )}

            {countersStore.error && (
              <tr className="counters-table__message-row counters-table__message-row_error">
                <td>{countersStore.error}</td>
              </tr>
            )}

            {!countersStore.isLoading &&
              !countersStore.error &&
              !countersStore.items.length && (
                <tr className="counters-table__message-row">
                  <td>Счётчики не найдены</td>
                </tr>
              )}
          </tbody>
          {/* <tfoot>
            <tr>
              <td>
                <Pagination
                  page={countersStore.page}
                  totalPages={countersStore.totalPages}
                  onPageChange={(p) => countersStore.setPage(p)}
                />
              </td>
            </tr>
          </tfoot> */}
        </table>
      </div>
    </div>
  );
});

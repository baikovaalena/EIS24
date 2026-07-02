import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { CounterRow, countersStore, type TCounter } from '@entities/counter';
import { DeleteCounter } from '@features/delete-counter';
import {
  formatCounterType,
  type CounterType,
} from '@shared/lib/formatCounterType';
import { formatDate } from '@shared/lib/formatDate';
import { Loader } from '@shared/ui/Loader';
import './CountersTable.scss';

const formatCurrentValue = (counter: TCounter) =>
  counter.initial_values.length ? counter.initial_values.join(', ') : '-';

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
                address={counter.area.id}
                currentValue={formatCurrentValue(counter)}
                deleteAction={<DeleteCounter />}
                description={counter.description?.trim() || '-'}
                index={countersStore.offset + index + 1}
                installationDate={formatDate(counter.installation_date)}
                isAutomatic={
                  counter.is_automatic === null
                    ? '-'
                    : counter.is_automatic
                      ? 'да'
                      : 'нет'
                }
                typeLabel={formatCounterType(
                  counter._type as readonly CounterType[]
                )}
                type={counter._type[0] as CounterType | undefined}
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
        </table>
      </div>
    </div>
  );
});

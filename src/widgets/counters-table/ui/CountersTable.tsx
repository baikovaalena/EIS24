import { CounterRow } from '@entities/counter';
import { DeleteCounter } from '@features/delete-counter';
import './CountersTable.scss';

export const CountersTable = () => {
  return (
    <div className="counters-table">
      <div className="counters-table__scroll">
        <table className="counters-table__table">
          <thead>
            <tr>
              <th scope="col">№</th>
              <th scope="col">Тип</th>
              <th scope="col">Дата</th>
              <th scope="col">Статус</th>
              <th scope="col">Показание</th>
              <th scope="col">Адрес</th>
              <th scope="col">Место установки</th>
              <th scope="col" aria-label="Действия" />
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 20 }, (_, i) => (
              <CounterRow
                key={i}
                index={i + 1}
                deleteAction={<DeleteCounter />}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

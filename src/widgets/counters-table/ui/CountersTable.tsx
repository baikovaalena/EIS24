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
              <th scope="col">Дата установки</th>
              <th scope="col">Автоматический</th>
              <th scope="col">Текущие показания</th>
              <th scope="col">Адрес</th>
              <th scope="col">Примечание</th>
              <th scope="col" aria-label="Действия" />
            </tr>
          </thead>

          <tbody>
            <CounterRow deleteAction={<DeleteCounter />} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

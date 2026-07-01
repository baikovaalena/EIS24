import clsx from 'clsx';
import type { ReactNode } from 'react';
import { iconHotWater } from '@shared/images';
import './CounterRow.scss';

interface IProps {
  className?: string;
  deleteAction?: ReactNode;
  index?: number;
}

export const CounterRow = ({ className, deleteAction }: IProps) => (
  <tr className={clsx('counter-row', className)}>
    <td className="counter-row__index">1</td>

    <td className="counter-row__type">
      <div className="counter-row__type-content">
        <img className="counter-row__type-icon" src={iconHotWater} alt="" />
        <span className="counter-row__type-label">ТПЛ</span>
      </div>
    </td>

    <td className="counter-row__date">12.01.2023</td>
    <td className="counter-row__status">да</td>
    <td className="counter-row__value">333467.6636</td>
    <td className="counter-row__address">
      г Санкт-Петербург, ул Тарасова, д. 0 корп. 0 лит. А, кв. 1
    </td>
    <td className="counter-row__location">Подвал, парадная 1</td>

    <td className="counter-row__delete">{deleteAction}</td>
  </tr>
);

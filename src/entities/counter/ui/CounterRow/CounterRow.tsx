import clsx from 'clsx';
import type { ReactNode } from 'react';
import { getCounterTypeIcon } from '@shared/lib/formatCounterType';
import type { TCounterType } from '@shared/lib/counterTypes';
import './CounterRow.scss';

interface IProps {
  address: string;
  currentValue: string;
  description: string;
  installationDate: string;
  isAutomatic: string;
  typeLabel: string;
  type?: TCounterType;
  index?: number;
  deleteAction?: ReactNode;
  className?: string;
}

export const CounterRow = ({
  address,
  className,
  currentValue,
  description,
  deleteAction,
  index,
  installationDate,
  isAutomatic,
  type,
  typeLabel,
}: IProps) => (
  <tr className={clsx('counter-row', className)}>
    <td className="counter-row__index">{index}</td>

    <td className="counter-row__type">
      <div className="counter-row__type-content">
        {type && (
          <img
            className="counter-row__type-icon"
            src={getCounterTypeIcon(type)}
            alt=""
          />
        )}
        <span className="counter-row__type-label">{typeLabel}</span>
      </div>
    </td>

    <td className="counter-row__date">{installationDate}</td>
    <td className="counter-row__status">{isAutomatic}</td>
    <td className="counter-row__value">{currentValue}</td>
    <td className="counter-row__address">{address}</td>
    <td className="counter-row__location">{description}</td>

    <td className="counter-row__delete">{deleteAction}</td>
  </tr>
);

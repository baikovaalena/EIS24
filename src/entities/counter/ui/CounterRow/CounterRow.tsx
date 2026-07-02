import clsx from 'clsx';
import type { ReactNode } from 'react';
import { formatCounterType, getCounterTypeIcon } from '../../lib/formatCounterType';
import {
  formatCurrentValue,
  formatInstallationDate,
  formatIsAutomatic,
} from '../../lib/formatCounter';
import type { TCounter } from '../../model/types';
import './CounterRow.scss';

interface IProps {
  counter: TCounter;
  index: number;
  address: string;
  deleteAction?: ReactNode;
  className?: string;
}

export const CounterRow = ({
  counter,
  index,
  address,
  deleteAction,
  className,
}: IProps) => {
  const primaryType = counter.counterTypes[0];

  return (
    <tr className={clsx('counter-row', className)}>
      <td className="counter-row__index">{index}</td>

      <td className="counter-row__type">
        <div className="counter-row__type-content">
          {primaryType && (
            <img
              className="counter-row__type-icon"
              src={getCounterTypeIcon(primaryType)}
              alt=""
            />
          )}
          <span className="counter-row__type-label">
            {formatCounterType(counter.counterTypes)}
          </span>
        </div>
      </td>

      <td className="counter-row__date">{formatInstallationDate(counter)}</td>
      <td className="counter-row__status">
        {formatIsAutomatic(counter.is_automatic)}
      </td>
      <td className="counter-row__value">{formatCurrentValue(counter)}</td>
      <td className="counter-row__address">{address}</td>
      <td className="counter-row__location">
        {counter.description?.trim() || '-'}
      </td>

      <td className="counter-row__delete">{deleteAction}</td>
    </tr>
  );
};

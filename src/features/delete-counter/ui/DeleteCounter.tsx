import clsx from 'clsx';
import { TrashIcon } from '@shared/images';
import './DeleteCounter.scss';

interface IProps {
  className?: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

export const DeleteCounter = ({ className, isDisabled, onClick }: IProps) => (
  <button
    type="button"
    className={clsx('delete-counter', className)}
    disabled={isDisabled}
    onClick={onClick}
    aria-label="Удалить"
  >
    <TrashIcon width={16} height={16} />
  </button>
);

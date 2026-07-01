import clsx from 'clsx';
import { TrashIcon } from '@shared/images';
import './DeleteButton.scss';

interface IProps {
  className?: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

export const DeleteButton = ({ className, isDisabled, onClick }: IProps) => (
  <button
    type="button"
    className={clsx('delete-button', className)}
    disabled={isDisabled}
    onClick={onClick}
    aria-label="Удалить"
  >
    <TrashIcon />
  </button>
);

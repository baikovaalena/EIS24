import clsx from 'clsx';
import { TrashIcon } from '@shared/images';
import { useDeleteCounter } from '../model/useDeleteCounter';
import './DeleteCounter.scss';

interface IProps {
  counterId: string;
  className?: string;
}

export const DeleteCounter = ({ counterId, className }: IProps) => {
  const { isDeleting, handleDelete } = useDeleteCounter(counterId);

  return (
    <button
      type="button"
      className={clsx('delete-counter', className)}
      disabled={isDeleting}
      onClick={handleDelete}
      aria-label="Удалить"
    >
      <TrashIcon width={16} height={16} />
    </button>
  );
};

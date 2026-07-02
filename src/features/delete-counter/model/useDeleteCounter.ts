import { useState } from 'react';
import { countersStore } from '@entities/counter';
import { deleteCounter } from '../api/deleteCounter.api';

export function useDeleteCounter(counterId: string) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    setIsDeleting(true);
    setError(null);
    try {
      await deleteCounter(counterId);
      const { offset, limit, count } = countersStore;
      const newCount = count - 1;
      const newOffset = offset > 0 && offset >= newCount ? offset - limit : offset;
      void countersStore.loadPage(newOffset);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Не удалось удалить счётчик',
      );
    } finally {
      setIsDeleting(false);
    }
  };

  return { isDeleting, error, handleDelete };
}

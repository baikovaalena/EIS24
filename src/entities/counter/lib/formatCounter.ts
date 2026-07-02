import { formatDate } from '@shared/lib/formatDate';
import type { TCounter } from '../model/types';

export const formatCurrentValue = (counter: TCounter): string =>
  counter.initial_values.length ? counter.initial_values.join(', ') : '-';

export const formatIsAutomatic = (value: boolean | null): string => {
  if (value === null) return '-';
  return value ? 'да' : 'нет';
};

export const formatInstallationDate = (counter: TCounter): string =>
  formatDate(counter.installation_date);

import type { IMetersResponse } from '../model/types';

export async function fetchCounters(limit: number, offset: number): Promise<IMetersResponse> {
  const params = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
  });

  const response = await fetch(`${import.meta.env.VITE_METERS_API_URL}?${params}`);

  if (!response.ok) {
    throw new Error(`Ошибка загрузки: ${response.status}`);
  }

  return response.json();
}

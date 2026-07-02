import type { IAreasResponse } from '../model/types';

export async function fetchAreas(ids: string[]): Promise<IAreasResponse> {
  const params = new URLSearchParams();
  ids.forEach((id) => params.append('id__in', id));

  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}areas/?${params}`
  );

  if (!response.ok) {
    throw new Error(`Ошибка загрузки адресов: ${response.status}`);
  }

  return response.json();
}

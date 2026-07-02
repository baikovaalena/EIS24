import { apiGet } from '@shared/api/client';
import type { IAreasResponse } from '../model/types';

export async function fetchAreas(ids: string[]): Promise<IAreasResponse> {
  const params = new URLSearchParams();
  ids.forEach((id) => params.append('id__in', id));

  return apiGet<IAreasResponse>('areas/', params);
}

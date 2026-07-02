import { apiGet } from '@shared/api/client';
import type { IMetersResponse } from '../model/types';

export async function fetchCounters(
  limit: number,
  offset: number,
): Promise<IMetersResponse> {
  const params = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
  });

  return apiGet<IMetersResponse>('meters/', params);
}

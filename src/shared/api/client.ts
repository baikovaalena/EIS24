export async function apiGet<T>(
  path: string,
  params?: URLSearchParams,
): Promise<T> {
  const url = `${import.meta.env.VITE_API_BASE_URL}${path}${params ? `?${params}` : ''}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Ошибка запроса: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function deleteCounter(id: string): Promise<void> {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}meters/${id}/`,
    { method: 'DELETE' },
  );

  if (!response.ok) {
    throw new Error(`Ошибка удаления: ${response.status}`);
  }
}

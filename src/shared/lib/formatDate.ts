export const formatDate = (value: string | null) => {
  if (!value) {
    return '-';
  }

  const [date] = value.split('T');
  const [year, month, day] = date.split('-');

  return day && month && year ? `${day}.${month}.${year}` : value;
};

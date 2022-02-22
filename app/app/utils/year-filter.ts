export const getYearFilter = (year?: number) => {
  if (!year) return undefined;
  const start = new Date(Date.UTC(year, 0, 1, 0, 0, 0, 0));
  const end = new Date(Date.UTC(year, 11, 31, 23, 59, 59, 999));

  return { lte: end, gte: start }
};

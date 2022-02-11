export const formatDate = (date: Date) => new Intl.DateTimeFormat('de', { dateStyle: 'full' }).format(new Date(date));

export const formatNumber = (num?: number, decimals?: number) =>
  Number.isNaN(num) || num === undefined || num === null
    ? undefined
    : Intl.NumberFormat('de', { maximumFractionDigits: decimals }).format(num);

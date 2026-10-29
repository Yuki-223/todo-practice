/** Return a stable UTC calendar date, independent of the server timezone. */
export function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

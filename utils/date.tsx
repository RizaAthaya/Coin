export function formatDate(isoDateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate: string = new Date(isoDateString).toLocaleDateString(
    "id-ID",
    options
  );
  return formattedDate;
}

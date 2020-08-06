import moment from 'moment-timezone';

export function formatDate(date: Date): string {
  const dateParsed = moment.tz(date, 'America/Sao_Paulo').format('DD/MM/YYYY HH:mm');
  return dateParsed;
}
export function InputformatDate(date: Date): string {
  return moment(date).format('YYYY-MM-DDTkk:mm');
}

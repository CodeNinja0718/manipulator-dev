import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import type dayjs from 'dayjs';
import { DATE_FORMAT } from 'utils/const';

export default function FormatDate({
  dateString,
  formatValue,
}: {
  dateString: string | dayjs.Dayjs;
  formatValue?: string;
}) {
  if (typeof dateString !== 'string') {
    return (
      <time dateTime={dateString.format(formatValue || DATE_FORMAT)}>
        {dateString.format(formatValue || DATE_FORMAT)}
      </time>
    );
  }
  const date = new Date(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, formatValue || DATE_FORMAT, { locale: ja })}
    </time>
  );
}

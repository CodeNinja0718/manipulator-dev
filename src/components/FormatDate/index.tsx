import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { DATE_FORMAT } from 'utils/const';

export default function FormatDate({
  dateString,
  formatValue,
}: {
  dateString: string;
  formatValue?: string;
}) {
  const date = new Date(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, formatValue || DATE_FORMAT, { locale: ja })}
    </time>
  );
}

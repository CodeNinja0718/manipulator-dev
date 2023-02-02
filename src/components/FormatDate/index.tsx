import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { DATE_FORMAT } from 'utils/const';

export default function FormatDate({ dateString }: { dateString: string }) {
  const date = new Date(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, DATE_FORMAT, { locale: ja })}
    </time>
  );
}

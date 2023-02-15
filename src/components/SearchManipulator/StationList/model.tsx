export interface LinesProps {
  _id: number;
  name: string;
}

export interface StationListProps {
  lines: LinesProps[];
  onSetSelectedStation: (value: string[]) => void;
}
export interface LinesProps {
  _id: number;
  name: string;
  groupId: string;
}

export interface StationListProps {
  lines: LinesProps[];
  onSetSelectedStation: (value: string[]) => void;
  selectedDefaultStations:string[]
  setSelectedLine : (value:number) => void,
  selectedLine : number
}

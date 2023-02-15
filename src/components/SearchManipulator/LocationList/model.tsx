export interface LocationProps {
  _id: number;
  name: string;
  provinceId: number;
  provinceName: string;
}

export interface LocationListProps {
  locations: LocationProps[];
  onSetSelectedLocation: (value: string[]) => void;
}

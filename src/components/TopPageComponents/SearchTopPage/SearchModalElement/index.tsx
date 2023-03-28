import SearchModal from 'components/SearchModal';
import { SearchTopPageType } from 'utils/const';

import { renderTabList } from './RenderTabList';
import TitleElement from './TitleElement';

interface SearchModalElementProps {
  open: boolean;
  selectedSymptomType: number;
  onSetSelectedSymptomType: (value: number) => void;
  currentDate: Date | string | null;
  onSetCurrentDate: (value: Date | string | null) => void;
  locations: {
    _id: number;
    name: string;
    provinceId: number;
    provinceName: string;
  }[];
  symptoms: {
    _id: number;
    symptomName: string;
    typeId: number;
    typeName: string;
  }[];
  lines: {
    _id: number;
    name: string;
  }[];
  disabled: boolean;
  activeTab?: number;
  onClose?: () => void;
  onSubmit: () => void;
  onSelectedSymptoms: (value: number[]) => void;
  onSetSelectedLocation: (value: string[]) => void;
  onSetSelectedStation: (value: string[]) => void;
  onChangeTab?: (value: number) => void;
}

const SearchModalElement = ({
  open,
  selectedSymptomType,
  onSetSelectedSymptomType,
  currentDate,
  onSetCurrentDate,
  locations,
  symptoms,
  lines,
  onSelectedSymptoms,
  onSetSelectedLocation,
  onSetSelectedStation,
  disabled = false,
  activeTab = SearchTopPageType.LOCATION,
  onClose,
  onSubmit,
  onChangeTab,
}: SearchModalElementProps) => {
  return (
    <SearchModal
      open={open}
      tabs={renderTabList(
        selectedSymptomType,
        onSetSelectedSymptomType,
        currentDate,
        onSetCurrentDate,
        locations,
        symptoms,
        lines,
        onSelectedSymptoms,
        onSetSelectedLocation,
        onSetSelectedStation,
      )}
      disabled={disabled}
      activeTab={activeTab}
      onClose={onClose}
      onSubmit={() => onSubmit()}
      titleElement={<TitleElement />}
      onChangeTab={onChangeTab}
    />
  );
};

export default SearchModalElement;

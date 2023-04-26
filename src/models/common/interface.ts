export interface ILocationList {
  result: {
    _id: number;
    name: string;
    provinceId: number;
    provinceName: string;
  }[];
}

export interface ICommonDataSalon {
  provinces: {
    _id: number;
    provinceId: number;
    provinceName: string;
  }[];
  symptoms: {
    _id: number;
    symptomName: string;
    typeId: number;
    typeName: string;
  }[];
  features: {
    _id: number;
    name: string;
  }[];
}

export interface ICommonLineList {
  result: {
    _id: number;
    name: string;
    groupId: string;
  }[];
}

export interface ICommonStation {
  result: {
    _id: number;
    name: string;
  }[];
}

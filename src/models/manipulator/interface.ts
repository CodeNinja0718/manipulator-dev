interface Photo {
  type: string;
  url: string;
  objectKey: string;
}
interface Salon {
  _id: string;
  name: string;
  nameKana: string;
  access: string[];
  photos: Photo[];
  features: Feature[];
}
interface Symptom {
  id: string;
  name: string;
}
interface Feature {
  id: string;
  name: string;
}
interface ReviewRating {
  total: number;
  averageRating: number;
}

export interface Menu {
  menuId: string;
  name: string;
  estimatedTime: number;
  order: number;
  price: number;
  currency: string;
}
export interface IManipulator {
  _id?: string;
  isFavorite: boolean;
  distance: string;
  timeSlots: string[];
  name: string;
  nameKana: string;
  avatar: string;
  pr: string;
  profile: string;
  careerStart: string;
  photos: Photo[];
  nationalLicenses: string[];
  salon: Salon[];
  symptoms: Symptom[];
  reviewRating: ReviewRating;
  menus: Menu[];
}

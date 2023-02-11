interface Photo {
  type: string;
  url: string;
}
interface Salon {
  _id: string;
  name: string;
  nameKana: string;
}
interface Symptom {
  id: string;
  name: string;
}
interface ReviewRating {
  total: number;
  averageRating: number;
}
export interface IManipulator {
  id?: string;
  isFavorite: boolean;
  distance: string;
  yearsOfExperience: string;
  treatmentMenu: any;
  name: string;
  nameKana: string;
  avatar: string;
  pr: string;
  profile: string;
  careerStart: string;
  photo: Photo[];
  fetures: Photo[];
  nationalLicenses: string[];
  salons: Salon[];
  symptoms: Symptom[];
  reviewRating: ReviewRating;
}

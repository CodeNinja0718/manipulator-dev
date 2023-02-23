interface IReviewRating {
  total: number;
  averageRating: number;
}

interface IReviewPhoto {
  objectKey: string;
  type: string;
  url: string;
}

export interface IManipulatorSummaryInfo {
  name: string;
  salonName: string;
  access: string[];
  reviewRating: IReviewRating;
  photos: IReviewPhoto[];
}

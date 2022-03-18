export interface ICategory {
  id: number;
  name: string;
  icon: string;
}

export interface ICategoryState {
  [id: string]: boolean;
}

export interface IComment {
  nickname: string;
  text: string;
  avatar: string;
}

export interface IRating {
  rate: string;
  storeIcon: string;
  stars: string;
  ratingCount: string;
  color: string;
}

export interface IBook {
  id: number;
  image: string;
  alt: string;
  category: string;
}

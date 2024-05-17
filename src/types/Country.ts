export interface Media {
  flag: string;
  emblem: string;
  orthographic: string;
}

export interface Country {
  abbreviation: string;
  capital: string;
  currency: string;
  name: string;
  phone: string;
  population: number;
  media: Media;
  id: number;
}

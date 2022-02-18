import { Bookmark, City, Country, Image } from '@prisma/client';

export type Envs = {
  MINIO_BASE_URL: string;
  APP_BASE_URL: string;
};

export type PartyData = {
  id: string;
  name: string;
  city: City & {
    country: Country;
  };
  date: Date;
  images: Image[];
  _count: {
    images: number;
  };
};

export type CityData = City & {
  country: Country;
  parties: {
    id: string;
    name: string;
    images: {
      id: string;
      filePath: string;
    }[];
  }[];
  _count: {
    parties: number;
  };
};

export type BookmarkData = Bookmark & {
  image: Image;
};

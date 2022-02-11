import { City, Country, Image } from '@prisma/client';

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

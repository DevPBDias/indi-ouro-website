import { StaticImageData } from "next/image";

export type ILinks = {
  id: number;
  name: string;
  path: string;
};

export type IContact = {
  id: number;
  description: string;
  icon: StaticImageData;
  value: string;
};

export type IGalleryCard = {
  id: number;
  title: string;
  image: StaticImageData;
  route: string;
};

export type IGalleryPhotos = {
  id: number;
  description: string;
  image: StaticImageData;
};

export type IBullCard = {
  id: number;
  name: string;
  fatherName: string;
  iABCz: number;
  image: StaticImageData;
};

export type ICoordinates = {
  latitude: string;
  longitude: string;
};

import { StaticImageData } from "next/image"

export type ILinks = {
    id: number,
    name: string,
    path: string,
}

export type IContact = {
    id: number,
    description: string,
    icon: StaticImageData,
    value: string,
}

export type IGalleryCard = {
    id: number,
    title: string,
    image: StaticImageData,
}

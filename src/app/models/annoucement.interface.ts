import Image from './image.interface';
import Service from './service.interface';
import Equipment from './equipment.interface';
import User from "./user.interface";

export default interface Announcement {
    id: number
    title: string
    description: string
    fullAddress: string
    address: string
    city: string
    zipcode: string
    lattitude: string
    longitude: string
    maxClient: number
    dailyPrice: number
    imageCover: string
    user: User
    images: Image[]
    services: Service[]
    equipment: Equipment[]
}
  
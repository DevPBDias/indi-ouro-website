import { IContact } from "@/interfaces";
import wppIcon from '../../public/icons/wppIcon.png'
import emailIcon from '../../public/icons/emailIcon.png'
import locationIcon from '../../public/icons/locationIcon.png'

export const footerLinks: IContact[] = [
    {
        id: 1,
        value: 'ricdias1969@gmail.com',
        icon: emailIcon,
        description: 'email contact'
    },
    {
        id: 2,
        value: '(63) 98404-6603 / (63) 99962-0203',
        icon: wppIcon,
        description: 'phone number contact'
    },
    {
        id: 3,
        value: 'Fazenda AGRO 3MIL, Porto Nacional, Tocantins',
        icon: locationIcon,
        description: 'farm location'
    },
]
export interface IObjUsers{
    users: IUser[],
    skip: number,
    limit: number
}

export interface IUser{
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: number,
    hair:IHair,
    "ip": string,
    address: IAddress,
    bank: IBanck,
    company: ICompany,
    "ein": string,
    ssn: string,
    userAgent: string,
    crypto: ICrypto,
    role: string
}


interface IHair{
    color: string,
    type: string
}

interface ICoordinates{
    lat: number,
    lng: number
}
interface IAddress {
    "address": string,
    city: string,
    state: string,
    stateCode: string,
    postalCode: string,
    coordinates: ICoordinates
    country: "United States",
    macAddress: string,
    university: string,
}

interface IBanck{
    cardExpire: string,
    cardNumber: string,
    cardType: string,
    currency: string,
    iban: string
}
interface ICoordinatesCompany{
    lat: number,
    lng: number
}
interface IAdressCompany{
    address: string,
    city: string,
    state: string,
    stateCode: string,
    postalCode: string,
    coordinates: ICoordinatesCompany
}

interface ICompany {
    departmen: string,
    name: string,
    title: string,
    address: IAdressCompany,
    country: string
}

interface ICrypto{
    "coin": string,
    "wallet": string,
    "network": string,
}
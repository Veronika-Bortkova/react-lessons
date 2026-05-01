export interface IUser
{
    id: number;
    name: string;
    username: string;
    email: string;
    address: Iadress
    phone: string;
    website: string;
    "company": ICompany
}

interface Iadress {
    street: string;
    suite: string;
    city: string;
    zipcode: string
    geo: IGeo
}
interface IGeo {
    lat: string;
    lng: string
}

interface ICompany{
    name: string;
    catchPhrase: string;
    bs: string
}
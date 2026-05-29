export interface IUsersObj
{
    page: number;
    per_page: number;
    total: number
    total_pages: number;
    data: IUser[];
    support: Isupport;
    _meta: I_meta;
}


export interface IUser{
    id: number;
    email: string;
    first_name: string;
    last_nam: string;
    avatar: string
}

interface Isupport{
    url: string;
    text:string
}

interface I_meta {
    powered_by: string;
    docs_url: string;
    upgrade_url: string;
    example_url: string;
    variant: string;
    message: string;
    cta: ICta;
    context: string
}

interface ICta{
    label: string;
    url: string
}
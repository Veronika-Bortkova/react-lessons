

export interface ITokenPair {
    accessToken: string; // new accessToken (returned in both response and cookies)
    refreshToken: string
}

export  interface ILoginModel {
    username:string;
    password: string;
    expiresInMins: number
}

export interface IResponseLoginModel{
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    accessToken: string; // JWT accessToken (for backward compatibility) in response and cookies
    refreshToken:string;
}
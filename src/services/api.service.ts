import type {IUser} from "../models/userInterface.ts";
// const BaseUrl = import.meta.env.VITE_API_URL;
export const getUsers = async ():Promise<IUser[]> => {

    return await fetch(import.meta.env.VITE_API_URL)
        .then(value => value.json());
}


export const getUser = async (id:string):Promise<IUser> =>{
    return await fetch(import.meta.env.VITE_API_URL+"/"+id)
        .then(value => value.json());
}

//можно єкспоорт обьявлять так
// export {
//getUsers,
//getUser
//}

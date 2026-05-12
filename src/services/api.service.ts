import type {IUser} from "../models/UserModel.ts";
import {urls} from "../constants/Url.ts";


export const userService = {
    getUsers: async ():Promise<IUser[]> =>{
       return  await fetch(urls.users.allUsersL)
        .then(value => value.json())

    },
    getUser: async (id:number) => {
        return fetch(urls.users.byId(id))
        .then(value => value.json())


    }
}
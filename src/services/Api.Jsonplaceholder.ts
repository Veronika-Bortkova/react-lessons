import type {IUser} from "../models/UsersJsonplaceholderModel.ts";
import {urlJsonplaceholder} from "../constants/urls.ts";

export const usersService = {
    getUsers: async ():Promise<IUser[]>=> {
        return await fetch(urlJsonplaceholder.ArrUsers)
            .then(value => value.json())
}
}
import type {IUser} from "../models/UsersJsonplaceholderModel.ts";
import {urlJsonplaceholder} from "../constants/urls.ts";
import type {IPostJsonplaceholder} from "../models/PostJsonplaceholderModel.ts";
import type {ICommentJsonplaceholder} from "../models/CommentJsonplaceholderModel.ts";

export const usersService = {
    getUsers: async ():Promise<IUser[]>=> {
        return await fetch(urlJsonplaceholder.ArrUsers)
            .then(value => value.json())
    },
    getPosts: async  ():Promise<IPostJsonplaceholder[]>=>{
        return await fetch(urlJsonplaceholder.ArrPosts)
        .then(value => value.json())
    },
    getComments: async   ():Promise<ICommentJsonplaceholder[]>=>{
        return await fetch(urlJsonplaceholder.ArrComments)
        .then(value => value.json());
}
}
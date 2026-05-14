import type {IUser} from "../models/UserModel.ts";
import {urls} from "../constants/Url.ts";
import type {IPost} from "../models/PostModel.ts";

export const userService = {
    getUsers: async ():Promise<IUser[]> =>{
       return  await fetch(urls.users.allUsersL)
        .then(value => value.json())

    },
    getUser: async (id:number) => {
        return fetch(urls.users.byId(id))
        .then(value => value.json())


    },

}

export const postService = {
    getAllPostsOfUserById:async (id:number):Promise<IPost[]> => {
        return await fetch(urls.posts.userPostById(id))
            .then(value => value.json())
    }
}

export const AllPostsService = {
    getAllPosts: async ():Promise<IPost[]> =>{
        return await fetch(urls.posts.allPosts)
        .then(value => value.json())

    }
}

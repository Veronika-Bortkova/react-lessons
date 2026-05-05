import type {IPost} from "../models/UserpostModel.ts";
export const postsUrl = import.meta.env.VITE_API_URLPOSTS;

export const getPosts = async ():Promise<IPost[]> => {
    return await  fetch(postsUrl)
        .then(value => value.json())
}

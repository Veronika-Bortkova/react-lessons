import type {IPost} from "../models/UserpostModel.ts";


export const getPosts = async ():Promise<IPost[]> => {
    return await  fetch("https://jsonplaceholder.typicode.com/posts")
        .then(value => value.json())
}
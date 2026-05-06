import type {IObjectPost} from "../models/postsModel.ts";

const urlDummy = import.meta.env.VITE_API_URLDUMMYJSON;
const urlDummyPosts = urlDummy + "/posts";

const loadDummyPosts = async ():Promise<IObjectPost> => {
    return await fetch(urlDummyPosts)
        .then(value => value.json())
}

export {
    urlDummyPosts,
    loadDummyPosts
}
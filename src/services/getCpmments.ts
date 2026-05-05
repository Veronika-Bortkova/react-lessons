import type {IComment} from "../models/commentModel.ts";

const baseUrl = import.meta.env.VITE_API_URLPOST;
const commentsUrl = baseUrl + "/comments";

const getArrComments = async ():Promise<IComment[]> =>
{
   return  await fetch(commentsUrl)
        .then(value => value.json())
}
export {
    baseUrl,
    commentsUrl,
    getArrComments

}

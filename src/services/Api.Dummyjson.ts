

import type {IObjDummy} from "../models/UsersDummyM odel.ts";
import {urlDummyjson} from "../constants/urls.ts";
import type {IObjPostDummy} from "../models/PostDummyModel.ts";
import type {ICommentsDummyjson} from "../models/CommentDummyjsonModel.ts";


export const usersDumyService = {
    getUsersDumy: async ():Promise<IObjDummy>=> {
        return await fetch(urlDummyjson.ObjArrUsersDummy)
            .then(value => value.json())
    },
    getPostsDummy: async ():Promise<IObjPostDummy>=>{
        return await fetch(urlDummyjson.arrPostsDummy)
        .then(value => value.json());
    },
    getCommentsDummy: async ():Promise<ICommentsDummyjson>=>{
        return await fetch(urlDummyjson.arrCommentsDummy)
            .then(value => value.json());
    },
}
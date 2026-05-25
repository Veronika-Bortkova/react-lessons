

import type {IObjDummy} from "../models/UsersDummyM odel.ts";
import {urlDummyjson} from "../constants/urls.ts";

export const usersDumyService = {
    getUsersDumy: async ():Promise<IObjDummy>=> {
        return await fetch(urlDummyjson.ObjArrUsersDummy)
            .then(value => value.json())
    }
}
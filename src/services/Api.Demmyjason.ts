import {UrlDummy} from "../constants/urls.ts";
import type {IObjUsers} from "../models/UsersModel.ts";

export const DummyService = {
    getUsers: async (skipNumber:string|null):Promise<IObjUsers> =>
        await fetch(UrlDummy.arrUsers + "/?limit=10&skip=" + skipNumber)
            .then(value => value.json()),


}
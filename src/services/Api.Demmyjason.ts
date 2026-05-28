import type {IObjDummy} from "../Models/UserDummyModel.ts";
import {UrlDummy} from "../Constants/url.ts";
import type {ICartsObj} from "../Models/CartModel.ts";

export const usersDummyService = {
    getUsersDummy: async ():Promise<IObjDummy> =>
        await fetch(UrlDummy.arrUsers)
            .then(value => value.json()),
    getCart: async (idUser:number):Promise<ICartsObj> =>
        await fetch(UrlDummy.cart+"/" + idUser)
            .then(value => value.json())
}
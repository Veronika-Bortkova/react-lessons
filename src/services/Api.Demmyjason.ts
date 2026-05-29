// import {UrlDummy} from "../constants/urls.ts";
// import type {IObjUsers} from "../models/UserModel.ts";
// import type {ICartsObj} from "../models/CartsModel.ts";
//
// export const DummyService = {
//     getUsers: async ():Promise<IObjUsers> =>
//         await fetch(UrlDummy.arrUsers)
//             .then(value => value.json()),
//     getCarts: async (idUser:number):Promise<ICartsObj>=>
//         await fetch(UrlDummy.cart + "/" + idUser)
//             .then(value => value.json())
//
// }
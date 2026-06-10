import * as axios from "axios";
import type {ILoginModel, IResponseLoginModel, ITokenPair} from "../models/TokenPairModel.ts";
import type {IObjUsersModel, IUserModel} from "../models/IUserModel.ts";
import type {IUserWithTokensModel} from "../models/UserWithTokensModel.ts";
import {retriveLocalStorage} from "./Helpers.ts";

const axiosDummy = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {}
});

// export const login = async (loginData:ILoginModel):Promise<IResponseLoginModel> =>{
//     const {data} = await axiosDummy.post<IResponseLoginModel>("/auth/login", loginData);
//     localStorage.setItem("token", data.accessToken);
//     localStorage.setItem("refreshToken", data.refreshToken);
//     return data
// }// этот сервис писала я - в локал сторидж положила сразу тоkены, Сергей положил весь обьект - перепишу как делал он
export const login = async (loginData:ILoginModel):Promise<IResponseLoginModel> =>{
    const {data} = await axiosDummy.post<IResponseLoginModel>("/auth/login", loginData);
    localStorage.setItem("user", JSON.stringify(data));//положила в локалсторидж не только токены, но весь обьект - который сервер прислал в ответ на удачную аутинтефикацию
    return data
}


// export const getAuthUsers = async ():Promise<IUserModel[]>=> {
//     const token = localStorage.getItem("token");
//     const {data} = await axiosDummy.get<IObjUsersModel>("/auth/users", {
//         headers: {
//             "Authorization": `Bearer ${token}`
//         }
//     })
//     return data.users
// }
// этот метод для получения ресурсов от авторизированного пользователя написанный руками
//дальше пишу как показал Сергей - более универсально


//это второй вариант еще мой код - это если доставю из локалсториджа не токен напрямую, а из обьекта
// export const getAuthUsers = async ():Promise<IUserModel[]>=> {
//     const userObjWithTokens = localStorage.getItem("user");
//     const token:IResponseLoginModel|null = userObjWithTokens ? JSON.parse(userObjWithTokens) : null;
//     const {data} = await axiosDummy.get<IObjUsersModel>("/auth/users", {
//         headers: {
//             "Authorization": `Bearer ${token?.accessToken}`
//         }
//     })
//     return data.users
// }


//это как у Сергея
export const getAuthUsers = async ():Promise<IUserModel[]>=> {
 const {data} = await axiosDummy.get<IObjUsersModel>("/auth/users");//вторім аргументом в функцию когда дастаем ресурсы от авторизированного пользователя должны быть после эндпоинта хеддеры - в которых есть токены, но чтобы не делать это постоянно кучу методов - будем писать более универсальную конструкцию для этого будем делать интерсептор на реквест
 return data.users
}




axiosDummy.interceptors.request.use((requestObject) =>{
    if (requestObject.method?.toUpperCase() === "GET"){//перехватываем все запросы с методом ГЕТ (ту апперкейс - на всякий случай переводим значение в верхний регистр, потому что оно может быть разным, а нам нужен именно верхний). Вопрос рядом с методом на тот случай, если нет запроса, чтобы не выдавало крит ошибку - потому что тогда и метода не будет. И если метод гет подтвердился, добавляем в процессе запроса в хеддер запроса, то что нам нужно - вытягивая его из локалсторидж
    requestObject.headers.Authorization = "Bearer " + retriveLocalStorage<IUserWithTokensModel>("user").accessToken// так как такой обьект после парсинга не типизируется, то нужно сделать дополнительный метод (выше - retriveLocalStorage)

    }

    console.log(requestObject);
    return requestObject;
})

// axiosDummy.interceptors.response.use((response) =>{
//     console.log(response);
//     return response;
// })



export const refreshToken = async ():Promise<ITokenPair>=>{
    const userObj = retriveLocalStorage<IUserWithTokensModel>("user");
    const refToken = userObj.refreshToken;
    const {data} = await axiosDummy.post<ITokenPair>("/auth/refresh", {refreshToken:refToken, expiresInMins:1});
    userObj.refreshToken = data.refreshToken;
    userObj.accessToken = data.accessToken;
    localStorage.setItem("user", JSON.stringify(userObj))
    return data
}

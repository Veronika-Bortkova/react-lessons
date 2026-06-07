
import * as axios from "axios";
import type {IUser} from "../Models/UserModel.ts";
import {AxiosHeaders} from "axios";


const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {"Content-Type": "application/json"}
})

// axiosInstance.get<IUser>("/users") //методом гет теперь вызываем что-то типа фетч - уже указывая только ту асть юрл, которая после базовой

export const getAllUsers = async (): Promise<IUser[]> =>{
    const {data} = await axiosInstance.get<IUser[]>("/users");
    // console.log(response);
    return data
}


axiosInstance.interceptors.request.use ((request) =>{
    console.log(request);
    console.log(request.method);//позволяет увидеть какой метод запроса был применен
    request.headers.set("JJJ", "uhhh"); //так можем интермептором, например обавить в заброс хедер

    return request;
})
//интерсепторы - перехватчики - вызывается по имени созданного аксиосом чего-то. вешается на запрос  или ответ (реквест- респонз)б внутри колбекфункция - имя переменной любое, но на реквест обычно ставят реквест - на респонз респонз. НЕ забыть ретернуть

axiosInstance.interceptors.response.use ((response) =>{
    console.log(response);
    console.log(response.status);
    if (response.headers instanceof AxiosHeaders){
    response.headers.set("JJJ", "uhhh");
    }

    return response;
})

// чтобы сделать метод пост - передать что-то на сервер

export const saveUser = async (user:IUser):Promise<IUser>=>{
    const {data} = await axiosInstance.post<IUser>("/users", user);
    return data;
}
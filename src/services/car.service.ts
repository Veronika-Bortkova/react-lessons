import * as axios from "axios";
import type {ICar} from "../Models/carModel.ts";

const axiosCar = axios.create({
    baseURL: "http://owu.linkpc.net/carsAPI/v1",
});

export const getAllCars = async ():Promise<ICar[]> =>{
    const {data} = await axiosCar.get("/cars");
    return data;
}

export const postCar = async (carData:Omit<ICar, 'id'>):Promise<ICar> =>{//Omit<ICar, 'id'> - делаю это чтобы можно было безболезненно вставить в форму и принять из нее значения - потому что параметр айди сервер присвоит сам. Омие с джинериком говорит - тип обьекта айкар исключая поле айди
    const {data} = await axiosCar.post("/cars", carData);
    return data
}

axiosCar.interceptors.response.use((response) =>{
    console.log(response);
    return response;
})

axiosCar.interceptors.request.use((request) =>{

    console.log(request);
    return request;
})
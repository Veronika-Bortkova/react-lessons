import type {IProducts} from "../models/ProductsModel.ts";
import type {IProduct} from "../models/ProductsModel.ts";


const dummyBaseUrl = import.meta.env.VITE_API_URLDUMMYJSONPRODUCTS;
const dummyProductsUrl = dummyBaseUrl + "/products";

const loadProducts = async ():Promise<IProduct[]> => {
   const arrProducts:IProducts = await fetch(dummyProductsUrl)
    .then(value => value.json());

    return arrProducts.products;
}









export {
    dummyProductsUrl,
    loadProducts

}
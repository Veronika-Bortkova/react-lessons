import {FC} from "react";
import type {IProduct} from "../../../models/Product.ts";
type MyPropsType = {
    product:IProduct
}

const MyProduct:FC<MyPropsType>= ({product}) => {
    return (
        <div>
            <h1>{product.title}. {product.price} uah</h1>
            <img src={product.image} alt={product.title}/>
        </div>
    );
};

export default MyProduct;

// products.map((product:IProduct) => (
//
//         <div>
//             <h1>{product.title}. {product.price} uah</h1>
//             <img src={product.image} alt={product.title}/>{/*в реакт одинарные теги типа имейдж обязательно закрвать иначе будет ошибка  */}
//
//
//         </div>
//
//     )
// )
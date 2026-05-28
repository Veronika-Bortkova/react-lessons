import {type FC} from 'react';
import type {IProduct} from "../../models/CartsModel.ts";
import "./ProducktBlockComponent.css"
type PropsType = {
    product:IProduct
}
const ProductBlockComponent:FC<PropsType> = ({product}) => {
    return (
        <div className={"productBlock"}>
            <h2>{product.title}</h2>
            <p>Price - {product.price}</p>
            <p>Quantity - {product.quantity}</p>
            <h4>Total - {product.total}</h4>
        </div>
    );
};

export default ProductBlockComponent;
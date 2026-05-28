import type {FC} from "react";
import type {IProduct} from "../../Models/CartModel.ts";
import "./ProductBlockComponent.css"
type ProductBlockPropsType = {
    product: IProduct
}

const ProductBlockComponent:FC<ProductBlockPropsType> = ({product}) => {
    return (
        <div className={"ProductBlock"}>
            <h2>Product title - {product.title}</h2>
            <p>Product prise - {product.price}</p>
            <p>Quantity - {product.quantity}</p>
            <p>Total - {product.total}</p>
        </div>
    );
};

export default ProductBlockComponent;
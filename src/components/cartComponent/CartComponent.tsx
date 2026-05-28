import type {FC} from "react";
import "./CartComponent.css"

import ProductBlockComponent from "../ProductBlockComponent/ProductBlockComponent.tsx";
import type {ICart} from "../../Models/CartModel.ts";
type cartPropsType = {
    cart: ICart
}


const CartComponent:FC<cartPropsType> = ({cart}) => {
    return (
        <>
            {cart.products.map(product => <ProductBlockComponent product={product}/>)}
            <div className={"Total"}>Total - {cart.total}</div>

        </>
    );
};

export default CartComponent;
import  {type FC} from 'react';
import type {ICart} from "../../models/CartsModel.ts";
import "./CartComponent.css"
import ProductBlockComponent from "../ProducktBlockComponent/ProductBlockComponent.tsx";
type PropsType = {
    cart: ICart
    }


const CartComponent:FC<PropsType> = ({cart}) => {
    return (
        <div className={"blockWithTotalByCart"}>
            {cart.products.map(product =><ProductBlockComponent key={product.id} product={product}/>)}
            <h2>Total by cart - {cart.total}</h2>
        </div>
    );
};

export default CartComponent;
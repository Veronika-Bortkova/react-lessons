
import type {ICartsObj} from "../../Models/CartModel.ts";
import {type FC, useEffect, useState} from "react";
import {usersDummyService} from "../../services/Api.Demmyjason.ts";
import CartComponent from "../cartComponent/CartComponent.tsx";
import "./CartssComponent..css"
type CartPropsTipe = {
    idUser: number
}

const CartssComponent:FC<CartPropsTipe> = ({idUser}) => {
    const [productsObj, setProductsObj] = useState<ICartsObj | null>(null);
    useEffect(() => {
        usersDummyService.getCart(idUser)
            .then(value =>{
                setProductsObj(value);
            } )
    }, []);
    return (

        <>

            <div className={"productsClass"}>
                {productsObj && productsObj.carts.map(cart => <CartComponent cart={cart}/>)}
            </div>


        </>
    );
};

export default CartssComponent;
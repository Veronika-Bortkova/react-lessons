import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import type {ICart} from "../../models/CartsModel.ts";
import {DummyService} from "../../services/Api.Demmyjason.ts";
import CartComponent from "../CartComponent/CartComponent.tsx";

const CartsComponent = () => {
    const {state} = useLocation();
    const userId:number = state;
    const [arrCarts, setArrCarts] = useState<ICart[]>([])
    useEffect(() => {
        DummyService.getCarts(userId)
            .then(objCart => setArrCarts(objCart.carts))

    }, []);
    return (
        <>
            {arrCarts.map(catr =><CartComponent key={catr.id} cart={catr}/>)}

        </>
    );
};

export default CartsComponent;
import type {ICar} from "../../Models/carModel.ts";
import type {FC} from "react";
import "./CarComponent.tsx.css"
type propType = {
    car: ICar;
}

const CarComponent:FC<propType> = ({car}) => {
    return (
        <div className={"carBlock"}>
            <p>id - {car.id}</p>
            <p>Brand - {car.brand}</p>
            <p>Price - {car.price}</p>
            <p>Year - {car.year}</p>

        </div>
    );
};

export default CarComponent;
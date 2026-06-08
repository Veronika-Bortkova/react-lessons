import {useEffect, useState} from "react";
import type {ICar} from "../../Models/carModel.ts";
import {getAllCars} from "../../services/car.service.ts";
import CarComponent from "../CarComponent/CarComponent.tsx";



const CarsComponent = () => {
    const [arrCars, setArrCars] = useState<ICar[]>([]);
    useEffect(() => {
        getAllCars().then(cars => setArrCars(cars));
    }, []);
    return (
        <>
            {arrCars.map(car => <CarComponent key={car.id} car={car}/>)}

        </>
    );
};

export default CarsComponent;
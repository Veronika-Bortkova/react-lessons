import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";


const LeftBranchA = () => {
    const {counterValue} = useContext(MyContext);//указіваем  хуке к какому контексту обращаемся ивінимаем нужную нам характеристику - в данном случае значение каунтервелью
    return (
        <div>
            Left Branch A
            <p>current counter value = {counterValue}</p>

        </div>
    );
};

export default LeftBranchA;
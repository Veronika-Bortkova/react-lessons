import "./UserBlockComponent.css"
import type {IUserDummy} from "../../Models/UserDummyModel.ts";
import {type FC, useState} from "react";
import CartssComponent from "../CartssComponent/CartssComponent.tsx";
type userPropsType = {
    user: IUserDummy;


}
const UserBlockComponent:FC<userPropsType> = ({user}) => {
    const [idVisible, setIdVisible] = useState<boolean>(false);
    return (
        <div className={"userBlock"}>

            <button onClick={()=> setIdVisible(!idVisible)}>
                {user.username} {user.firstName} {user.lastName}
            </button>
            {idVisible && <CartssComponent idUser={user.id}/>}

        </div>
    );
};

export default UserBlockComponent;
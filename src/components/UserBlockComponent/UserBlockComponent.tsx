import {type FC} from 'react';
import type {IUser} from "../../models/UserModel.ts";
import {useNavigate} from "react-router-dom";
import "./UserBlockComponent.css"
type propsType = {
    user: IUser
}

const UserBlockComponent:FC<propsType> = ({user}) => {
    const navigate = useNavigate();
    const handleOnclick = ()=>{
        navigate("user/cart/" + user.id, {state: user.id});
    }

    return (
        <div className={"userBlock"}>
            <button onClick={handleOnclick}>
            <h2>{user.username}</h2>
            <p>{user.email}</p>
            </button>
        </div>
    );
};

export default UserBlockComponent;
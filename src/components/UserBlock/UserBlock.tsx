import type {IUser} from "../../models/UsersJsonplaceholderModel.ts";
import type {FC} from "react";
import "./UserBlock.css"

type UserPropsType = {
    user:IUser
}

const UserBlock:FC<UserPropsType> = ({user}) => {
    return (
        <div className={"UserBlockClass"}>
            <h2>{user.name}</h2>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.address.city}</p>
        </div>
    );
};

export default UserBlock;
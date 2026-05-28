import type {IUser} from "../../models/UsersJsonplaceholderModel.ts";
import type {FC} from "react";
import "./UserJsonplaceholderBlockComponent.css"

type UserPropsType = {
    user:IUser
}

const UserJsonplaceholderBlockComponent:FC<UserPropsType> = ({user}) => {
    return (
        <div className={"UserBlockClass"}>
            <h2>{user.name}</h2>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.address.city}</p>
        </div>
    );
};

export default UserJsonplaceholderBlockComponent;
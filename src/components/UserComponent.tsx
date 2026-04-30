import type {IUser} from "../models/UserModel.ts";
import type {FC} from "react";

type userPropType = {
    item:IUser;
}
const UserComponent:FC<userPropType> = ({item}) => {
    return (
        <div>{item.name}</div>
    );
};

export default UserComponent;
import type {FC} from "react";
import type {IUser} from "../models/userInterface.ts";
type userPropTipe = {
    item: IUser;
}

const UserComponent:FC<userPropTipe> = ({item}) => {
    return (
        <div>
            {item.name}
        </div>
    );
};

export default UserComponent;
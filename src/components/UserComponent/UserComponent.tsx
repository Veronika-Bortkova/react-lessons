import type {IUserModel} from "../../Models/UserModel.ts";
import type {FC} from "react";

type PropsType = {
    user: IUserModel
}

const UserComponent:FC<PropsType> = ({user}) => {
    return (
        <div>
            {user.id}  {user.name}
        </div>
    );
};

export default UserComponent;
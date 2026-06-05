import type {FC} from "react";
import type {IUser} from "../../models/UsersModel.ts";
type PropsType = {
    user: IUser;
}

const UserComponent:FC<PropsType> = ({user}) => {
    return (
        <div>
            {user.id} {user.firstName}
        </div>
    );
};

export default UserComponent;
import type {IUser} from "../../Models/UserModel.ts";
import type {FC} from "react";

type propsType = {
    user: IUser
}

const UserComponen:FC<propsType> = ({user}) => {
    return (
        <div>
            {user.id} {user.name}
        </div>
    );
};

export default UserComponen;
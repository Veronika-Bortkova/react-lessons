import type {IUser} from "../../models/UserModel.ts";
import type {FC} from "react";
type propUserType ={
    item: IUser;
}

const UserComponent:FC<propUserType>= ({item}) => {
    return (
        <div>
            {item.name}
        </div>
    );
};

export default UserComponent;
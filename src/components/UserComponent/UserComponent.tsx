import type {FC} from "react";
import type {IUserModel} from "../../models/IUserModel.ts";

type PropType ={
    user: IUserModel
}


const UserComponent:FC<PropType> = ({user}) => {
    return (
        <div>
            <p>{user.id}  {user.username}</p>
        </div>
    );
};

export default UserComponent;
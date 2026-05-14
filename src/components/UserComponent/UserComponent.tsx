import type {IUser} from "../../models/UserModel.ts";
import type {FC} from "react";
import {Link, useNavigate} from "react-router-dom";
type propUserType ={
    item: IUser;
}

const UserComponent:FC<propUserType>= ({item}) => {
   const navigate = useNavigate();
   const handleOnclick = ()=>{
       navigate("posts/" + item.id, {state: item})
   };
    return (
        <div>
            <Link to={"datails"} state={item}>{item.name}</Link>
            <button onClick={handleOnclick}>go to datails</button>
        </div>
    );
};

export default UserComponent;
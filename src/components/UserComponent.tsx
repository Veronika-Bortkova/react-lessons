import type {FC} from "react";
import type {IUser} from "../models/userInterface.ts";
type userPropTipe = {
    item: IUser;
    foo: (item:IUser)=>void;
}

const UserComponent:FC<userPropTipe> = ({item, foo}) => {
    return (
        <>
            <div>{item.name}</div>
            <button onClick={()=>{
                foo(item);
            }}>details</button>

        </>
    );
};

export default UserComponent;
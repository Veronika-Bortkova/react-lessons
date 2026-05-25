import  {type FC} from 'react';
import type {IUserDummy} from "../../models/UsersDummyM odel.ts";
import "./UserDummyBlock.css"
type UserDummyPropsType = {
    UserDummy:IUserDummy
}

const UserDummyBlock:FC<UserDummyPropsType> = ({UserDummy}) => {
    return (
        <div className={"UserBlockDummyClass"}>
            <h2>{UserDummy.firstName} {UserDummy.lastName}</h2>
            <p>{UserDummy.address.country}</p>
            <p>Company - {UserDummy.company.name}</p>
        </div>
    );
};

export default UserDummyBlock;
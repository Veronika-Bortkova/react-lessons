import  {type FC} from 'react';
import type {IUserDummy} from "../../models/UsersDummyM odel.ts";
import "./UserDummyBlockComponent.css"
type UserDummyPropsType = {
    UserDummy:IUserDummy
}

const UserDummyBlockComponent:FC<UserDummyPropsType> = ({UserDummy}) => {
    return (
        <div className={"UserBlockDummyClass"}>
            <h2>{UserDummy.firstName} {UserDummy.lastName}</h2>
            <p>{UserDummy.address.country}</p>
            <p>Company - {UserDummy.company.name}</p>
        </div>
    );
};

export default UserDummyBlockComponent;
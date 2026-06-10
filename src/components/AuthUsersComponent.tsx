import {useEffect, useState} from "react";
import type {IUserModel} from "../models/IUserModel.ts";
import {getAuthUsers, refreshToken} from "../services/Api.Demmyjason.ts";
import UserComponent from "./UserComponent/UserComponent.tsx";


const AuthUsersComponent = () => {
    const [users, setUsers] = useState<IUserModel[]>([]);
    useEffect(() => {
        getAuthUsers().then(arrUsers => setUsers(arrUsers))
            .catch(reason=> refreshToken().then(()=>getAuthUsers()
            .then(arrUsers => setUsers(arrUsers))
            )

            );
    }, []);
    return (
        <>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}

        </>
    );
};

export default AuthUsersComponent;
import {useEffect, useState} from "react";
import type {IUser} from "../models/userInterface.ts";
import UserComponent from "./UserComponent.tsx";
import {getUsers} from "../services/api.service.ts";


const UsersArrComponents = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getUsers()
        .then(response => {
            setUsers(response)

        });
    }, []);


    return (
        <div>
            {users.map(value => <UserComponent key = {value.id} item={value}/>)}

        </div>
    );
};

export default UsersArrComponents;
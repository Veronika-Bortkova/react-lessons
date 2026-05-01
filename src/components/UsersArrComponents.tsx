import {useEffect, useState} from "react";
import type {IUser} from "../models/userInterface.ts";
import UserComponent from "./UserComponent.tsx";
import {getUsers} from "../services/api.service.ts";


const UsersArrComponents = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [item, setItem] = useState<IUser|null>(null);
    useEffect(() => {
        getUsers()
        .then(response => {
            setUsers(response)

        });
    }, []);
    const foo = (item:IUser) =>{
        setItem(item);
    }


    return (
        <>

            {item && <div>{item.id}, {item.name}, {item.phone}</div>}
            <div>{users.map(value => <UserComponent key = {value.id} foo={foo} item={value}/>)}</div>

        </>
    );
};

export default UsersArrComponents;
import {useEffect, useState} from "react";
import type {IUser} from "../models/UserModel.ts";
import UserComponent from "./UserComponent.tsx";

const FullUsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() =>{
        console.log("app");
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(response => {
                setUsers(response);
            });

        return () =>{
            console.log("unn")
        }
    }, []);

    return (
        <>
            {
                users.map( (value) => <UserComponent key={value.id} item={value}/>)
            }
            </>
    );
};

export default FullUsersComponent;
import  {useEffect, useState} from 'react';
import type {IUser} from "../../models/UsersJsonplaceholderModel.ts";
import {usersService} from "../../services/Api.Jsonplaceholder.ts";
import UserBlock from "../UserBlock/UserBlock.tsx";

const UsersJsonplaceholder = () => {
    const [arrUsersJsonplaceholder, setArrUsersJsonplaceholder] = useState<IUser[]>([]);
    useEffect(()=>{
        usersService.getUsers()
            .then(arrUsers =>
            setArrUsersJsonplaceholder(arrUsers))

    }, []);

    return (
        <>
            {arrUsersJsonplaceholder.map(user => <UserBlock key={user.id} user={user}/>)}
        </>
    );
};

export default UsersJsonplaceholder;
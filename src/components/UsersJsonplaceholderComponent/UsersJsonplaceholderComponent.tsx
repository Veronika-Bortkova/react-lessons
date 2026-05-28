import  {useEffect, useState} from 'react';
import type {IUser} from "../../models/UsersJsonplaceholderModel.ts";
import {usersService} from "../../services/Api.Jsonplaceholder.ts";
import UserJsonplaceholderBlockComponent from "../UserJsonplaceholderBlockComponent/UserJsonplaceholderBlockComponent.tsx";

const UsersJsonplaceholderComponent = () => {
    const [arrUsersJsonplaceholder, setArrUsersJsonplaceholder] = useState<IUser[]>([]);
    useEffect(()=>{
        usersService.getUsers()
            .then(arrUsers =>
            setArrUsersJsonplaceholder(arrUsers))

    }, []);

    return (
        <>
            {arrUsersJsonplaceholder.map(user => <UserJsonplaceholderBlockComponent key={user.id} user={user}/>)}
        </>
    );
};

export default UsersJsonplaceholderComponent;
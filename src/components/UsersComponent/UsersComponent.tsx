import  {useEffect, useState} from 'react';
import type {IUser} from "../../models/UserModel.ts";
import {DummyService} from "../../services/Api.Demmyjason.ts";
import UserBlockComponent from "../UserBlockComponent/UserBlockComponent.tsx";


const UsersComponent = () => {
    const [arrUsers, setArrUsers] = useState<IUser[]>([]);

    useEffect(() => {
        DummyService.getUsers()
            .then(value => setArrUsers(value.users))

    }, []);
    return (
        <>

                {arrUsers.map(user => <UserBlockComponent key={user.id} user={user}/>)}


        </>
    );
};

export default UsersComponent;
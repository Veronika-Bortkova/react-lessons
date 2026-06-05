import {useEffect, useState} from "react";
import type {IUser} from "../../models/UsersModel.ts";
import {DummyService} from "../../services/Api.Demmyjason.ts";
import UserComponent from "../UserComponent/UserComponent.tsx";
import {useSearchParams} from "react-router-dom";


const UsersComponent = () => {
    const [arrUsers, setArrUsers] = useState<IUser[]>([]);
    const [query] = useSearchParams();
    let skipNumber = query.get("pg");
    if (skipNumber) {
        let calc = (+skipNumber * 10 - 10).toString();

        useEffect(() => {
            DummyService.getUsers(calc)
                .then(users => setArrUsers(users.users))
        }, [skipNumber]);
    }
    return (
        <div>
            {arrUsers.map(user => <UserComponent key={user.id} user={user}/>)}

        </div>
    );
};

export default UsersComponent;
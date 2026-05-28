import  {useEffect, useState} from 'react';
import type {IUserDummy} from "../../models/UsersDummyM odel.ts";
import {usersDumyService} from "../../services/Api.Dummyjson.ts";
import UserDummyBlockComponent from "../userDummyBlockComponent/userDummyBlockComponent.tsx";

const UsersDummyjsonComponent = () => {

    const [arrUsersDummyjson, setArrUsersDummyjson] = useState<IUserDummy[]>([]);
    useEffect(() => {
        usersDumyService.getUsersDumy()
            .then(objDumy => {
                setArrUsersDummyjson(objDumy.users)
            })

    }, []);
    return (
        <>
            {arrUsersDummyjson.map(userDummy => <UserDummyBlockComponent key = {userDummy.id} UserDummy={userDummy}/>)}

        </>
    );
};

export default UsersDummyjsonComponent;
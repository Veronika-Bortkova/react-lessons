import  {useEffect, useState} from 'react';
import type {IUserDummy} from "../../models/UsersDummyM odel.ts";
import {usersDumyService} from "../../services/Api.Dummyjson.ts";
import UserDummyBlock from "../userDummyBlock/userDummyBlock.tsx";

const UsersDummyjson = () => {

    const [arrUsersDummyjson, SetarrUsersDummyjson] = useState<IUserDummy[]>([]);
    useEffect(() => {
        usersDumyService.getUsersDumy()
            .then(objDumy => {
                SetarrUsersDummyjson(objDumy.users)
            })

    }, []);
    return (
        <>
            {arrUsersDummyjson.map(userDummy => <UserDummyBlock key = {userDummy.id} UserDummy={userDummy}/>)}

        </>
    );
};

export default UsersDummyjson;
import {useEffect, useState} from "react";
import type {IUserDummy} from "../../Models/UserDummyModel.ts";
import {usersDummyService} from "../../services/Api.Demmyjason.ts";
import UserBlockComponent from "../UserBlockComponent/UserBlockComponent.tsx";



const UsersComponent = () => {
    const [arrUsers, setArrUsers] = useState<IUserDummy[]>([]);
    // const [userId, setUserId] = useState<number | null>(null);
    useEffect(() => {
        usersDummyService.getUsersDummy()
            .then(usersObj => {
                setArrUsers(usersObj.users);
            })
    }, []);
    // const cartBlock = (userId:number)=> {
    //     setUserId(userId);
    // }


    return (
        <>

            {arrUsers.map(user => <UserBlockComponent key={user.id}  user={user}/>)

            }

            </>
    );
};

export default UsersComponent;
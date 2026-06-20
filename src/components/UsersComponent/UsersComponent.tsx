
import type {IUserModel} from "../../Models/UserModel.ts";
import UserComponent from "../UserComponent/UserComponent.tsx";
import {useFetch} from "../../hooks/Usefetch.tsx";

const UsersComponent = () => {
    const users = useFetch<IUserModel[]>("https://jsonplaceholder.typicode.com/users");
    if (users){
    return (
        <div>
            {users.map(user => <UserComponent user={user} key ={user.id}/>)}


        </div>
    );
    }
    return <div>Загрузка пользователей...</div>
};

export default UsersComponent;
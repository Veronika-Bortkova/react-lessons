import {useEffect, useState} from "react";
import {getAllUsers, saveUser} from "../services/user.service.ts";
import type {IUser} from "../Models/UserModel.ts";
import UserComponen from "../components/UserComponent/UserComponen.tsx";




const FormPage = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getAllUsers().then(arrUsers => setUsers(arrUsers));
        saveUser({id:77, name: "Nic", email: "kj@jj"}).then(value => console.log(value));
    }, []);
    return (
        <div>
            {users.map(user => <UserComponen key={user.id} user={user}/>)}



        </div>
    );
};

export default FormPage;






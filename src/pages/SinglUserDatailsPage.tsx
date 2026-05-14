import {useLocation} from "react-router-dom";
import type {IUser} from "../models/UserModel.ts";
import UserEmailComponent from "../components/UserEmailComponent/UserEmailComponent.tsx";


const SinglUserDatailsPage = () => {
    const {state} = useLocation();
    const user = state as IUser;
    return (
        <div>
            <UserEmailComponent email={user.email}/>
        </div>
    );
};

export default SinglUserDatailsPage;
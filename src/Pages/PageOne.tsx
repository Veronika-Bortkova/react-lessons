import UsersComponent from "../components/UsersComponent/UsersComponent.tsx";
import {Outlet} from "react-router-dom";


const PageOne = () => {
    return (
        <div>
            Page One
            <UsersComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default PageOne;
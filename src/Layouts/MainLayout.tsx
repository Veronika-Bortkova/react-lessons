import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            User list
            <Outlet/>
        </div>
    );
};

export default MainLayout;
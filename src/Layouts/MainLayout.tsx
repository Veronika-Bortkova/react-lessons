import {Outlet} from "react-router-dom";


const MainLayout = () => {
    return (
        <>
            Users
            <Outlet/>

        </>
    );
};

export default MainLayout;
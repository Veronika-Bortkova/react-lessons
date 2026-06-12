import {Outlet} from "react-router-dom";


const MainLayout = () => {
    console.log("Main Layout")
    return (
        <div>
            MainLayout
            <div>
            <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;
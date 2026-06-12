import {Outlet} from "react-router-dom";


const MainLayout = () => {
    console.log("Main Layout")
    return (
        <div>
            MainLayout
            <hr/>

            <Outlet/>

        </div>
    );
};

export default MainLayout;
import {Outlet} from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <hr/>
            <Outlet/>
           
        </div>
    );
};

export default MainLayout;
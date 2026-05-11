import Menu from "../components/menu/Menu.tsx";
import {Outlet} from "react-router-dom";


const Mainlayout = () => {
    return (
        <div>
            <Menu/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default Mainlayout;
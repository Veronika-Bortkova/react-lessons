import "./MenuComponent.css"
import { NavLink} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={"/"}>Home page</NavLink></li>
                <li><NavLink to={"login"}>Login Page</NavLink></li>
                <li><NavLink to={"auth/resorces"}>Auth resorces</NavLink></li>



            </ul>
        </div>
    );
};

export default MenuComponent;
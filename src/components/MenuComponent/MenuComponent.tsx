import { NavLink} from "react-router-dom";
import "./MenuComponent.css"

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li> <NavLink to={"/cars"}>Cars</NavLink></li>
                <li> <NavLink to={"/newCars"}>Create New Car</NavLink></li>

            </ul>
        </div>
    );
};

export default MenuComponent;
import { NavLink} from "react-router-dom";
import "./MenuComponent.css"
import type {FC} from "react";
interface IMenuElementProps{
    children: string;
    form: string
}

const MenuComponent:FC<IMenuElementProps> = ({form, children}) => {
    return (
        <>

                <li> <NavLink to={form}>{children}</NavLink></li>

        </>
    );
};



// const MenuComponent = () => {
//     return(
// <div>
//     <ul>
//         <li> <NavLink to={"/cars"}>Cars</NavLink></li>
//         <li> <NavLink to={"/newCars"}>Create New Car</NavLink></li>
//
//     </ul>
// </div>
//     );
// }
export default MenuComponent;
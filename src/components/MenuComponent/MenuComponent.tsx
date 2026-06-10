import { NavLink} from "react-router-dom";
import "./MenuComponent.css"
// import type {FC} from "react";
// interface IMenuElementProps{
//     children: string;
// }

// const MenuComponent:FC<IMenuElementProps> = ({children}) => {
//     return (
//         <div>
//
//                 <li> <NavLink to={children}>{children}</NavLink></li>
//
//         </div>
//     );
// };



const MenuComponent = () => {
    return(
<div>
    <ul>
        <li> <NavLink to={"/cars"}>Cars</NavLink></li>
        <li> <NavLink to={"/newCars"}>Create New Car</NavLink></li>

    </ul>
</div>
    );
}
export default MenuComponent;
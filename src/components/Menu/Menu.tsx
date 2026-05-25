import {Link} from "react-router-dom";

const Menu = () => {
    return (

            <ul>
                <li><Link to={""}>Home</Link></li>
                <li><Link to={"users/jsonplaceholder"}>Users jsonplaceholde </Link></li>
                <li><Link to={"users/dummyjson"}>Users dummyjson </Link></li>
                <li><Link to={"posts/jsonplaceholder"}>Posts jsonplaceholder </Link></li>

            </ul>


    );
};

export default Menu;
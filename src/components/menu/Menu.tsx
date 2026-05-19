
import {Link} from "react-router-dom"

const Menu = () => {
    return (
        <div>
            <ul>
                {/*<li><Link to={"/"}>Home</Link></li>*/}
                <li><Link to={"posts"}>Posts</Link></li>
                <li><Link to={"comments"}>Comments</Link></li>
                <li><Link to={"products"}>Products</Link></li>
                <li><Link to={"users"}>Users</Link></li>
                <li><Link to={"users/jsonplaceholder"}>UsersJsonplaceholder</Link></li>
                <li><Link to={"users/dummyjson"}>Users Dummyjson</Link></li>


            </ul>
        </div>
    );
};

export default Menu;
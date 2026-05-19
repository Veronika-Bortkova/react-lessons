import {Link} from "react-router-dom" ;

const Menu = () => {
    return (
        <ul>
            <li><Link to={"users/jsonplaceholder"}>Users Jsonplaceholder</Link></li>
            <li><Link to={"posts/jsonplaceholder"}>Posts Jsonplaceholder</Link></li>
            <li><Link to={"posts/dummyjson"}>Posts Dummyjson</Link></li>
            <li><Link to={"comments/jsonplaceholder"}>Posts Dummyjson</Link></li>




        </ul>
    );
};

export default Menu;
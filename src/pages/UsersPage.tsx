import {Outlet, Link} from "react-router-dom"

const UsersPage = () => {
    return (
        <div>
            UsersPage
            <ul>
                <li><Link to={"jsonplaceholder"}>jsonplaceholder</Link></li>
                <li><Link to={"dummyjson"}>DummyjsonPage</Link></li>

            </ul>
            <Outlet/>
        </div>
    );
};

export default UsersPage;
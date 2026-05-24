import {Outlet, Link} from "react-router-dom"

const PostPage = () => {
    return (
        <div>
            PostPage

            <ul>
                <li><Link to={"jsonplaceholder"}>Posts arr jsonplaceholder</Link></li>
                <li><Link to={"dummyjson"}>Posts arr dummyjson</Link></li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default PostPage;
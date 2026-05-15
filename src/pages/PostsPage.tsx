
import ArrPostsOfNumber from "../components/ArrPostsOfNumber/ArrPostsOfNumber.tsx";
import {Outlet} from "react-router-dom";


const PostsPage = () => {
    return (
        <div>
            <ArrPostsOfNumber/>
            <br/>
            <Outlet/>
        </div>

    );
};

export default PostsPage;
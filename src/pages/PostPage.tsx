import {useParams} from "react-router-dom";
import PostsComponent from "../components/PostsComponent/PostsComponent.tsx";



const PostPage = () => {
    const {userId} = useParams();

    return (
        <div>
            {userId && <PostsComponent userId={userId}/>}
        </div>
    );
};

export default PostPage;
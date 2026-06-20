import {useFetch} from "../../hooks/Usefetch.tsx";
import type {Ipost} from "../../Models/UserModel.ts";
import PostComponent from "../PostComponent/PostComponent.tsx";



const PostsComponent = () => {
    const posts = useFetch<Ipost[]>("https://jsonplaceholder.typicode.com/posts")
    return (
        <div>
            {posts && posts.map(post => <PostComponent post={post} key={post.id}/>)}
        </div>
    );
};

export default PostsComponent;
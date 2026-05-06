
import {useEffect, useState} from "react";
import type {IObjectPost, IPosts} from "../models/postsModel.ts";
import {loadDummyPosts} from "../services/services.ts";
import PostComponent from "./PostComponent/PostComponent.tsx";


const AllPostsComponent = () => {
    const [objectPosts, setObjectPosts] = useState<IObjectPost>({posts:[]});
    useEffect(() => {
        loadDummyPosts()
        .then(response => {
            setObjectPosts(response);

        });
    }, []);

    return (

        <div>
            {objectPosts.posts.map((post:IPosts) =>  <PostComponent key = {post.id} postItem = {post}/>)}
        </div>
    );
};

export default AllPostsComponent;
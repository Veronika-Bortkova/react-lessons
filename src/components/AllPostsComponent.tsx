import {useEffect, useState} from "react";
import {getPosts} from "../services/getPosts.ts";
import type {IPost} from "../models/UserpostModel.ts";
import PostComponent from "./PostComponent/PostComponent.tsx";

const AllPostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getPosts()
        .then(value => {
            setPosts(value);
        });
    }, []);

    return (
        <div>
            {posts.map((itemPost:IPost) => <PostComponent key = {itemPost.id} item={itemPost}/>)}
        </div>
    );
};

export default AllPostsComponent;
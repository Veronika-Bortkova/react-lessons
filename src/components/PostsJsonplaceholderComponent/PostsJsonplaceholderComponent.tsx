import  {useEffect, useState} from 'react';
import type {IPostJsonplaceholder} from "../../models/PostJsonplaceholderModel.ts";
import {usersService} from "../../services/Api.Jsonplaceholder.ts";
import PostJsonplaceholdeBlockComponent from "../PostPostJsonplaceholdeBlockComponent/PostJsonplaceholdeBlockComponent.tsx";

const PostsJsonplaceholderComponent = () => {
    const [arrPostsJsonplaceholder, setArrPostsJsonplaceholder] = useState<IPostJsonplaceholder[]>([]);
    useEffect(() => {
        usersService.getPosts()
            .then(posts => {
                setArrPostsJsonplaceholder(posts);
            })

    }, []);

    return (
        <>
            {arrPostsJsonplaceholder.map(post => <PostJsonplaceholdeBlockComponent key = {post.id} post={post}/>)}

        </>
    );
};

export default PostsJsonplaceholderComponent;
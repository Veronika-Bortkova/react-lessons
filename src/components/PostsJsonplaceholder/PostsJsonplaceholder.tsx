import  {useEffect, useState} from 'react';
import type {IPostJsonplaceholder} from "../../models/PostJsonplaceholderModel.ts";
import {usersService} from "../../services/Api.Jsonplaceholder.ts";
import PostBlock from "../PostBlock/PostBlock.tsx";

const PostsJsonplaceholder = () => {
    const [arrPostsJsonplaceholder, SetarrPostsJsonplaceholder] = useState<IPostJsonplaceholder[]>([]);
    useEffect(() => {
        usersService.getPosts()
            .then(posts => {
                SetarrPostsJsonplaceholder(posts);
            })

    }, []);

    return (
        <>
            {arrPostsJsonplaceholder.map(post => <PostBlock key = {post.id} post={post}/>)}

        </>
    );
};

export default PostsJsonplaceholder;
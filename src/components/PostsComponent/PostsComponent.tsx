import {type FC, useEffect, useState} from "react";
import type {IPost} from "../../models/PostModel.ts";
import {postService} from "../../services/api.service.ts";
import PostComponent from "../PostComponent/PostComponent.tsx";

type PostsTypeProps = {
    userId:string
}

const PostsComponent:FC<PostsTypeProps> = ({userId}) => {
    const [posts, SetPosts] = useState<IPost[]>([]);
    useEffect(() => {

        if (userId) {
            postService
                .getAllPostsOfUserById(+userId)
                .then(value => {
                    console.log(value);
                    SetPosts(value)
                })
        }
    }, [userId]);

    return (
        <div>
            {
                posts.map(value => <PostComponent key={value.id} post={value}/>)
            }
        </div>
    );
}

export default PostsComponent;
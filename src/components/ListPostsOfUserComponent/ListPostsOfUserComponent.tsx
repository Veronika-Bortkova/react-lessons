import {useEffect, useState} from "react";
import type {IPost} from "../../models/PostModel.ts";
import { postService} from "../../services/api.service.ts";
import { useLocation} from "react-router-dom";
import PostsOfUserBlock from "../PostsOfUserBlock/PostsOfUserBlock.tsx";


const ListPostsOfUserComponent = () => {
    const [postsOfUser, SetPostOfUser]= useState<IPost[]>([]);
    const {state} = useLocation();
    const post = state as IPost;
    useEffect(() => {
        postService.getAllPostsOfUserById(post.userId)
            .then(value => SetPostOfUser(value));
    }, [post.userId]);
    return (
        <div>
            {postsOfUser.map(value => <PostsOfUserBlock key={value.id} PostsOfUserForBlock={value}/>)}

        </div>
    );
};

export default ListPostsOfUserComponent;
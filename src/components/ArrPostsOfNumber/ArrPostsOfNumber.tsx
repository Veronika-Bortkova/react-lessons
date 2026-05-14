import React, {useEffect, useState} from 'react';
import type {IPost} from "../../models/PostModel.ts";
import {AllPostsService} from "../../services/api.service.ts";
import PostOfNumber from "../PostOfNumber.tsx";

const ArrPostsOfNumber = () => {
    const [postsOfNumers, SetPostsOfNumers] = useState<IPost[]>([]);
    useEffect(() => {
        AllPostsService.getAllPosts()
            .then(AllPosts =>{
                SetPostsOfNumers(AllPosts);
            })
    }, []);
    return (
        <div>
            {postsOfNumers.map(value => <PostOfNumber key={value.id} PostOfNumberProps={value}/>)}
        </div>
    );
};

export default ArrPostsOfNumber;
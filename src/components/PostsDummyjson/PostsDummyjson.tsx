import {useEffect, useState} from 'react';

import {usersDumyService} from "../../services/Api.Dummyjson.ts";
import PostDummyBlock from "../PostDummyBlock/PostDummyBlock.tsx";
import type {IPostDummy} from "../../models/PostDummyModel.ts";

const PostsDummyjson = () => {
    const  [arrPostsDummyjson, SetarrPostsDummyjson] = useState<IPostDummy[]>([]);
    useEffect(() => {
        usersDumyService.getPostsDummy()
            .then(posts => {
                SetarrPostsDummyjson(posts.posts);
            })

    }, []);
    return (

        <>
            {arrPostsDummyjson.map(postsDummy => <PostDummyBlock key={postsDummy.id} post={postsDummy}/>)}

        </>
    );
};

export default PostsDummyjson;
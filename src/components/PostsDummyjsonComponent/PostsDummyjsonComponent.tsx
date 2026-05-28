import {useEffect, useState} from 'react';

import {usersDumyService} from "../../services/Api.Dummyjson.ts";
import PostDummyBlockComponent from "../PostDummyBlockComponent/PostDummyBlockComponent.tsx";
import type {IPostDummy} from "../../models/PostDummyModel.ts";

const PostsDummyjsonComponent = () => {
    const  [arrPostsDummyjson, setArrPostsDummyjson] = useState<IPostDummy[]>([]);
    useEffect(() => {
        usersDumyService.getPostsDummy()
            .then(posts => {
                setArrPostsDummyjson(posts.posts);
            })

    }, []);
    return (

        <>
            {arrPostsDummyjson.map(postsDummy => <PostDummyBlockComponent key={postsDummy.id} post={postsDummy}/>)}

        </>
    );
};

export default PostsDummyjsonComponent;
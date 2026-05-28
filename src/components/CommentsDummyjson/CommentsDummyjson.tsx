import {useEffect, useState} from 'react';
import {usersDumyService} from "../../services/Api.Dummyjson.ts";
import type {ICommentDummyjson} from "../../models/CommentDummyjsonModel.ts";
import CommentDummyjsonBlock from "../CommentDummyjsonBlock/CommentDummyjsonBlock.tsx";

const CommentsDummyjson = () => {
    const [arrCommentsDummyjson, setArrCommentsDummyjson] = useState<ICommentDummyjson[]>([])
    useEffect(() => {
        usersDumyService.getCommentsDummy()
            .then(comments => {
                setArrCommentsDummyjson(comments.comments);
            })

    }, []);
    return (
        <>
            {arrCommentsDummyjson.map(comment => <CommentDummyjsonBlock key={comment.id} comment={comment}/>)}

        </>
    );
};

export default CommentsDummyjson;
import {useEffect, useState} from 'react';
import {usersDumyService} from "../../services/Api.Dummyjson.ts";
import type {ICommentDummyjson} from "../../models/CommentDummyjsonModel.ts";
import CommentDummyjsonBlockComponent from "../CommentDummyjsonBlockComponent/CommentDummyjsonBlockComponent.tsx";

const CommentsDummyjsonComponent = () => {
    const [arrCommentsDummyjson, setArrCommentsDummyjson] = useState<ICommentDummyjson[]>([])
    useEffect(() => {
        usersDumyService.getCommentsDummy()
            .then(comments => {
                setArrCommentsDummyjson(comments.comments);
            })

    }, []);
    return (
        <>
            {arrCommentsDummyjson.map(comment => <CommentDummyjsonBlockComponent key={comment.id} comment={comment}/>)}

        </>
    );
};

export default CommentsDummyjsonComponent;
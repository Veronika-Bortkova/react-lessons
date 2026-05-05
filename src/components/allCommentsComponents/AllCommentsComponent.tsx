import {useEffect, useState} from "react";
import type {IComment} from "../../models/commentModel.ts";
import {getArrComments,} from "../../services/getCpmments.ts";
import CommentComponent from "../comment_Component/CommentComponent.tsx";

const AllCommentsComponent = () => {
    const [arrComments, setArrComments] = useState<IComment[]>([]);
    useEffect(() => {
        getArrComments()
        .then(response => {
        setArrComments(response);
        });
    }, []);

    return (
        <div>
            {arrComments.map((itemComment) => <CommentComponent key = {itemComment.id} comment={itemComment}/>)}
        </div>
    );
};

export default AllCommentsComponent;
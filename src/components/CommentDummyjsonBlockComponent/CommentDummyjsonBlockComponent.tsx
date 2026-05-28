import type {ICommentDummyjson} from "../../models/CommentDummyjsonModel.ts";
import type {FC} from "react";
import "./CommentDummyjsonBlockComponent.css"

type CommentDummyjsonBlockPropsType = {
    comment: ICommentDummyjson;
}

const CommentDummyjsonBlockComponent:FC<CommentDummyjsonBlockPropsType> = ({comment}) => {
    return (
        <div className={"CommentDummyBlockClass"}>
            <h2>{comment.body}</h2>
            <p>{comment.user.username} {comment.user.fullName}</p>
            <p>Likes - {comment.likes}</p>
        </div>
    );
};

export default CommentDummyjsonBlockComponent;
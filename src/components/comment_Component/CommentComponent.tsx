import type {FC} from "react";
import type {IComment} from "../../models/commentModel.ts";
import "./CommentComponent.tsx.css"
type CommentPropType = {
    comment: IComment;
}

const CommentComponent:FC<CommentPropType> = ({comment}) => {
    return (
        <div className={"block"}>
            <div>Post number - {comment.postId}, Comment number - {comment.id}</div>
            <h2>{comment.name}</h2>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentComponent;
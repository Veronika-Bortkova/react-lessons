import type {ICommentJsonplaceholder} from "../../models/CommentJsonplaceholderModel.ts";
import type {FC} from "react";
import "./CommentJsonplaceholderBlockComponent.css"

type CommentJasPropsType = {
    comment:ICommentJsonplaceholder;
}

const CommentsJsonplaceholderBlockComponent:FC<CommentJasPropsType> = ({comment}) => {
    return (
        <div className={"CommentBlockClass"}>
            <p>{comment.body}</p>
            <p>{comment.email}</p>
        </div>
    );
};

export default CommentsJsonplaceholderBlockComponent;
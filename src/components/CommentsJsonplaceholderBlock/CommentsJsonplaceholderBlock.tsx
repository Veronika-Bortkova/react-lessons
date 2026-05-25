import type {ICommentJsonplaceholder} from "../../models/CommentJsonplaceholderModel.ts";
import type {FC} from "react";
import "./CommentBlock.css"

type CommentJasPropsType = {
    comment:ICommentJsonplaceholder;
}

const CommentsJsonplaceholderBlock:FC<CommentJasPropsType> = ({comment}) => {
    return (
        <div className={"CommentBlockClass"}>
            <p>{comment.body}</p>
            <p>{comment.email}</p>
        </div>
    );
};

export default CommentsJsonplaceholderBlock;
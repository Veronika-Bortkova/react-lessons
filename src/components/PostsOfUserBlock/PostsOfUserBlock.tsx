import type {FC} from "react";
import type {IPost} from "../../models/PostModel.ts";

type PostsOfUserForBlockTypeProps = {
    PostsOfUserForBlock: IPost;
}

const PostsOfUserBlock:FC<PostsOfUserForBlockTypeProps> = ({PostsOfUserForBlock}) => {
    return (
        <div>
            <h3>{PostsOfUserForBlock.title} userId{PostsOfUserForBlock.userId}</h3>
            <p>{PostsOfUserForBlock.body}</p>

        </div>
    );
};

export default PostsOfUserBlock;
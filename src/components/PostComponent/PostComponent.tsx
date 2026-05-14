import type {FC} from "react";
import type {IPost} from "../../models/PostModel.ts";

type PostTypeProps = {
    post:IPost;
}
const PostComponent:FC<PostTypeProps> = ({post}) => {
    return (
        <div>{post.title}</div>
    );
};

export default PostComponent;
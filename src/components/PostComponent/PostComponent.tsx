import type {FC} from "react";
import type {Ipost} from "../../Models/UserModel.ts";


type PropsType = {
    post: Ipost;
}

const PostComponent:FC<PropsType> = ({post}) => {
    return (
        <div>
            {post.id}  {post.title}
        </div>
    );
};

export default PostComponent;
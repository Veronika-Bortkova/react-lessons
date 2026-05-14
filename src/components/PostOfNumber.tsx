import type {FC} from "react";
import type {IPost} from "../models/PostModel.ts";
type PostOfNumberProps = {
    PostOfNumberProps: IPost;
}

const PostOfNumber:FC<PostOfNumberProps> = ({PostOfNumberProps}) => {
    return (
        <div>
            <p>Post №{PostOfNumberProps.id}</p>
            <p>Uzer Id - {PostOfNumberProps.userId}</p>
            <h2>{PostOfNumberProps.title}</h2>
            <p>{PostOfNumberProps.body}</p>
            <button>Posts of user №{PostOfNumberProps.userId} </button>
            <hr/>
        </div>
    );
};

export default PostOfNumber;
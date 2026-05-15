import type {FC} from "react";
import type {IPost} from "../models/PostModel.ts";
import {useNavigate} from "react-router-dom";
type PostOfNumberProps = {
    PostOfNumberA: IPost;
}

const PostOfNumber:FC<PostOfNumberProps> = ({PostOfNumberA}) => {
    const navigate1 = useNavigate();
    const handleOnclick1 = () =>{
        navigate1("/posts/postsOfSingleUser/" + PostOfNumberA.userId, {state: PostOfNumberA})
    }
    return (
        <div>
            <p>Post №{PostOfNumberA.id}</p>
            <p>Uzer Id - {PostOfNumberA.userId}</p>
            <h2>{PostOfNumberA.title}</h2>
            <p>{PostOfNumberA.body}</p>
            <button onClick={handleOnclick1}>Posts of user №{PostOfNumberA.userId} </button>
            <hr/>
        </div>
    );
};

export default PostOfNumber;
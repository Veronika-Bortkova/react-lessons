import {type FC} from 'react';
import "./PostsPostJsonplaceholdeBlockComponent.css"
import type {IPostJsonplaceholder} from "../../models/PostJsonplaceholderModel.ts";
type PostBlockPropsType = {
    post:IPostJsonplaceholder
}


const PostJsonplaceholdeBlockComponent:FC<PostBlockPropsType> = ({post}) => {
    return (
        <div className={"PostsBlockClass"}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default PostJsonplaceholdeBlockComponent;
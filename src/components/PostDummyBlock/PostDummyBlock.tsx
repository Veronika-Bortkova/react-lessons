import {type FC} from 'react';
import type {IPostDummy} from "../../models/PostDummyModel.ts";
import Tegs from "../Tegs/Tegs.tsx";
import "./PostsDummyBlock.css"
type PostDummyPropsType = {
    post: IPostDummy,
}

const PostDummyBlock:FC<PostDummyPropsType> = ({post}) => {
    return (
        <div className={"PostsDummyBlockClass"}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p> Tegs:  <Tegs key={post.id} tags={post.tags}/></p>
            <p>Reactions: likes - {post.reactions.likes}, dislikes - {post.reactions.dislikes}</p>
            <p>Views: {post.views}</p>
        </div>
    );
};

export default PostDummyBlock;
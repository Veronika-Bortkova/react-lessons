import {type FC} from 'react';
import type {IPostDummy} from "../../models/PostDummyModel.ts";
import TegsComponent from "../TegsComponent/TegsComponent.tsx";
import "./PostsDummyBlockComponent.css"
type PostDummyPropsType = {
    post: IPostDummy,
}

const PostDummyBlockComponent:FC<PostDummyPropsType> = ({post}) => {
    return (
        <div className={"PostsDummyBlockClass"}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p> Tegs:  <TegsComponent key={post.id} tags={post.tags}/></p>
            <p>Reactions: likes - {post.reactions.likes}, dislikes - {post.reactions.dislikes}</p>
            <p>Views: {post.views}</p>
        </div>
    );
};

export default PostDummyBlockComponent;
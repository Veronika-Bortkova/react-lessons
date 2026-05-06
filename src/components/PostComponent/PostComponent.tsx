import type {FC} from "react";
import type {IPosts} from "../../models/postsModel.ts";
import "./PostComponent.css"
import TagsComponent from "../TagsComponent.tsx";
type PropPostType = {
    postItem:IPosts;
}

const PostComponent:FC<PropPostType> = ({postItem}) => {
    return (
        <div className={"block"}>
            <h2>{postItem.title}</h2>
            <p>{postItem.body}</p>
            <div><TagsComponent tags={postItem.tags} /></div>
            <p>likes - {postItem.reactions.likes}, dislikes - {postItem.reactions.dislikes}</p>
            <p>Views - {postItem.views}</p>
        </div>
    );
};

export default PostComponent;
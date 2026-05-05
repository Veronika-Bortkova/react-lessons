import type {IPost} from "../../models/UserpostModel.ts";
import type {FC} from "react";
import "./PostComponent.css"
type propType = {
    item:IPost;
}


const PostComponent:FC<propType> = ({item}:propType) => {
    return (
        <div className={"post_block"}>
            <div>UserId - {item.userId}, Post Id - {item.id}</div>
            <div>Title - {item.id}, Post body: {item.body}</div>
        </div>
    );
};

export default PostComponent;
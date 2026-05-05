import type {FC} from "react";
import type {ITodosItem} from "../models/ITodosItem.ts";
type todoPropsType = {
    todosItem: ITodosItem;
}

export const TodoComponent:FC<todoPropsType> = ({todosItem})=>{
    return (
        <div>
        <p>User ID - {todosItem.userId}</p>
        <p>ID - {todosItem.id}</p>
        <p>Title - {todosItem.title}</p>
        <p>Complited - {todosItem.completed+""}</p>
        </div>

    )
}
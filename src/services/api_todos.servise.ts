import type {ITodosItem} from "../models/ITodosItem.ts";

export const getTodosArr = async ():Promise<ITodosItem[]> => {
    return await fetch("https://jsonplaceholder.typicode.com/todos")
    .then(value => value.json())

}
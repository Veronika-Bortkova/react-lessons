import {useEffect, useState} from "react";
import {getTodosArr} from "../services/api_todos.servise.ts";
import type {ITodosItem} from "../models/ITodosItem.ts";
import {TodoComponent} from "./TodoComponent.tsx";

export const TodoComponents = ()=>{
    const [todos, setTodos] = useState<ITodosItem[]>([]);
    console.log("raz");
    useEffect(() => {
        getTodosArr()
            .then((response)=>
        {
            setTodos(response)
        }
            )
    }, []);

return (

    <>
        {todos.map(value => <TodoComponent key={value.id} todosItem={value}/>)}

    </>


)
}
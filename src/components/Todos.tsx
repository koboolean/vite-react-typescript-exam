import React, {useContext} from 'react';
import TodoItem from "./TodoItem.tsx";
import classes from './Todos.module.css'
import {TodosContext} from "../store/todos-context.tsx";

const Todos: React.FC = () => {
    const ctx = useContext(TodosContext);

    return <ul className={classes.todos}>
        {ctx.items.map(item =><TodoItem key={item.id} onRemoveTodo={ctx.removeTodo.bind(null, item.id)} text={item.text}/>)}
    </ul>
}

export default Todos;

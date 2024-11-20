import React, {useContext, useRef} from 'react';
import classes from './NewTodo.module.css';
import {TodosContext} from "../store/todos-context.tsx";

const NewTodo : React.FC = () => {

    const ctx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event : React.FormEvent) => {
        event.preventDefault();

        const value = todoTextInputRef.current!.value;

        if(value.trim().length === 0){
            return;
        }

        ctx.addTodo(value);
    }

    return <form className={classes.form} onSubmit={(event) => submitHandler(event)}>
        <label htmlFor={"text"}>Todo Text</label>
        <input type={"text"} id={"text"} ref={todoTextInputRef}/>
        <button>Add Todo</button>
    </form>
}

export default NewTodo;

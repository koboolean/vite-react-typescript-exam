import {createContext, FC, ReactNode, useState} from "react";
import Todo, {TodoContextObj} from "../models/todos.ts";

export const TodosContext = createContext<TodoContextObj>({
    items : [],
    addTodo: () => {},
    removeTodo: () => {}
});

export const TodosContextProvider : FC<{children : ReactNode}> = (props) => {

    const [todo, setTodo] = useState<Todo[]>([])

    const addTodoHandler = (value : string) => {
        const newTodo = new Todo(value);
        setTodo(prev => {
            return prev.concat(newTodo);
        });
    };

    const removeTodoHandler = (todoId : string)=> {
        setTodo(prev => {
            return prev.filter(todo => todo.id !== todoId);
        })
    }

    const contextValue : TodoContextObj = {
        items : todo,
        addTodo : addTodoHandler,
        removeTodo : removeTodoHandler
    }

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}



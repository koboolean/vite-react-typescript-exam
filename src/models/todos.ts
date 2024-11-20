import React from "react";

/** 1. class 타입 */
export default class Todo {
    id : string;
    text : string;

    constructor(todoText : string) {
        this.id = new Date().toISOString();
        this.text = todoText;
    }
}

export interface TodosProps{
    items: Todo[];
    onRemoveTodo: (id : string) => void;
    children?: React.ReactNode;
}

export type TodoContextObj = {
    items : Todo[];
    addTodo : (text : string) => void;
    removeTodo : (id : string) => void
}

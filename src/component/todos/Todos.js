import {useEffect, useState} from "react";

import {todoService} from "../../services";
import {Todo} from "../todo/Todo";
import css from './Todos.module.css'

const Todos = () => {
    let [todos,setTodos] = useState([]);

    useEffect(() => {
        todoService.getAll().then(({data}) => setTodos([...data]));
    }, []);

    return (

        <div className={css.Todo}>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {Todos};
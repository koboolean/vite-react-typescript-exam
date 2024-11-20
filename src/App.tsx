import './App.css'
import Todos from "./components/Todos.tsx";
import NewTodo from "./components/NewTodo.tsx";

export default function App() {
    return (
        <div>
            <NewTodo/>
            <Todos/>
        </div>
    )
}

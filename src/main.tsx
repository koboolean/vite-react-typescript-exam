import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {TodosContextProvider} from "./store/todos-context.tsx";

createRoot(document.getElementById('root')!).render(
    <TodosContextProvider>
        <App />
    </TodosContextProvider>
)

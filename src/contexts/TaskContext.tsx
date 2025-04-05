import { createContext, ReactNode } from "react";
import { Task } from "../entities/Task";

export interface TasksContextData{
    tasks:Task[]
    createTask: (attributes: Omit<Task, "id">) => Promise<Task>
    updateTask: (id: number, attributes: Partial<Omit<Task, "id">>) => Promise<void>
    deleteTask: (id: number) => Promise<void>
}

export const TasksContext = createContext({})

export interface TasksContextProviderProps{
    children: ReactNode
}

export const TasksContextProvider : React.FC = ({ children }) =>{
    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() =>{
        tasksService.fetchTasks().then((storedTasks) =>{
         setTasks(storedTasks)
        })
     }, [])

    return(
        <TasksContext.Provider value={{tasks}}>
            {children}
        </TasksContext.Provider>
    )
}
// Task2:
//Spisok zadach
// Zadacha  
// done

// Zadacha 
// done

// Zadacha  
// not done

// Zadacha 
// done

import TaskCompleted from "./TaskCompleted"
import TaskNotCompleted from "./taskNotCompleted"

function App(){
    return (
        <div>
            <h1>Spisok zadach</h1>
            <TaskCompleted/>
            <TaskCompleted/>
            <TaskNotCompleted/>
            <TaskCompleted/>
        </div>
    )
}

export default App
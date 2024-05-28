import { Tasks } from "@/types/tasks"

const baseUrl = "http://localhost:3001"


export const getTasks = async (): Promise<Tasks[]> => {
const response = await fetch(`${baseUrl}/tasks`, {cache: 'no-store'})
const tasks = await response.json()
return tasks
}

export const postTasks = async (task: Tasks): Promise<Tasks> => {
    const response = await fetch(`${baseUrl}/tasks`, {
        method:'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
    })

   const newTask = await response.json()
   return newTask
}

export const putTask = async ( task: Tasks ): Promise<Tasks> => {
    const response = await fetch(`${baseUrl}/tasks/${task.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json' 
        },
        body: JSON.stringify(task)
    })
    const editedTask = await response.json()
    return editedTask
}
 

export const deleteTask = async (taskId:string): Promise<void> => {
    await fetch(`${baseUrl}/tasks/${taskId}`, {
        method: 'DELETE',
    })
} 
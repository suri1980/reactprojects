import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        tasks: [
            {
                id: 1,
                task: 'Use Redux',
                completed: true
            },
            {
                id: 2,
                task: 'Use Redux 2',
                completed: false
            },
            {
                id: 3,
                task: 'Use Redux 3',
                completed: true
            }
        ],
        newTask: ""
    },
    reducers: {
        addTodo: (state, action) => {
            state.tasks.push(action.payload.newTodo);
            //state.tasks = action.payload.tasks
        },
        addNewTask: (state, action) => {
            state.newTask = action.payload.newTask
        },
        completeTask: (state, action) => {
            state.tasks = state.tasks.map((task) => {
                task.completed = action.payload.id === action.payload.selectedId ? true : task.completed
            })
        }
    }
})

export const { addTodo, addNewTask, completeTask } = todoSlice.actions;

export default todoSlice.reducer;


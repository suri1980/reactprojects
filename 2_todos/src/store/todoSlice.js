import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    tasks: [
    ],
    newTask: "",
    selectedId: "",
  },
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push(action.payload.newTodo);
    },
    addNewTask: (state, action) => {
      state.newTask = action.payload.newTask;
    },
    completeTask: (state, action) => {
      state.selectedId = action.payload.selectedId;
      state.tasks.map((task) => {
        task.completed =
          task.id === action.payload.selectedId ? true : task.completed;
        return task;
      });
    },
  },
});

export const { addTodo, addNewTask, completeTask } = todoSlice.actions;

export default todoSlice.reducer;

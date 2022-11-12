import React from "react";
import { TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, addNewTask } from "../store/todoSlice";
import { v4 as uuidv4 } from "uuid";


const TaskForm = () => {
  const dispatch = useDispatch();
  const taskData = useSelector((state) => state.todos.tasks);
  const task = useSelector((state) => state.todos.newTask);

  function handleChange(e) {
    const newTask = e.target.value;
    dispatch(addNewTask({ newTask }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const newTodo = { id: id, task: task, completed: false };
    dispatch(addTodo({ newTodo }));
    console.log(taskData);
    const newTask = "";
    dispatch(addNewTask({ newTask }));
  };

  return (
    <div className="todo">
      <h1>Add Task</h1>
      <div className="todoForm">
        <form className="addTaskForm" onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Type your task and press enter"
            value={task}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required={true}
          />
        </form>
      </div>
    </div>
  );
};

export default TaskForm;

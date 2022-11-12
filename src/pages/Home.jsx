import React from "react";
import {
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, addNewTask, completeTask } from "../store/todoSlice";
import "../styles/common.scss";

// Table Imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { v4 as uuidv4 } from "uuid";

const Home = () => {
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

  const updateTask = (e) => {
    console.log("BEFORE" + JSON.stringify(taskData));
    const selectedId = e.target.value;
    dispatch(completeTask({ selectedId }));
  };

  return (
    <Container>
      <div className="home">
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
        <div className="todoTable">
          <h1>My Tasks</h1>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="tableHead">Task</TableCell>
                  <TableCell className="tableHead" align="right">
                    Completed
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {taskData.length === 0 ? (
                  <TableRow>
                    <TableCell className="tableHead">No Tasks Today</TableCell>
                  </TableRow>
                ) : (
                  taskData.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        className={row.completed ? "completed" : "newtask"}
                      >
                        {row.task}
                      </TableCell>
                      <TableCell align="right">
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={row.completed}
                              disabled={row.completed}
                              value={row.id}
                              onChange={updateTask}
                            />
                          }
                        />
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </Container>
  );
};

export default Home;

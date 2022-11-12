import React from "react";
import {
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { completeTask } from "../store/todoSlice";

// Table Imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TodoTable = () => {
    const dispatch = useDispatch();
    const taskData = useSelector((state) => state.todos.tasks);
  
    const updateTask = (e) => {
      const selectedId = e.target.value;
      dispatch(completeTask({ selectedId }));
    };

  return (
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
  )
}

export default TodoTable

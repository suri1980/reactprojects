import React from "react";
import {
  Container,
} from "@mui/material";
import "../styles/common.scss";
import TaskForm from "../components/TaskForm";
import TodoTable from "../components/TodoTable";


const Home = () => {

  return (
    <Container>
      <div className="home">
        <TaskForm />
        <TodoTable />
      </div>
    </Container>
  );
};

export default Home;

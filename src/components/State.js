import React, { useState } from "react";
import Input from "antd/es/input/Input";
import { Button } from "antd";

const Message = () => {
  const [message, setMessage] = useState("Welcome!");
  return (
    <div>
      <h1>{message}</h1>
      <Button onClick={() => setMessage("Thanks for subcribed!")}>
        Subcribe
      </Button>
    </div>
  );
};

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1>You have clicked me {counter} times</h1>
      <Button onClick={increase}>Click me!</Button>
    </div>
  );
};

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = () => {
    setTasks((prev) => [...prev, task]);
    setTask("");
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <Input
        style={{ width: "400px" }}
        value={task}
        onChange={(e) => setTask(e.target.value)}
      ></Input>
      <Button onClick={handleSubmit}>Add</Button>

      <ul>
        {tasks.map((task, index) => (
          <li style={{ listStyleType: "none" }} key={index}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const StateView = () => {
  return (
    <React.Fragment>
      <Message></Message>
      <Counter></Counter>
      <TodoList></TodoList>
    </React.Fragment>
  );
};

// export function HuyCounter() {}/

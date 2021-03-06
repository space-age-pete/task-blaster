import React, { useState, useEffect } from "react";
import API, { Task } from "../utils/API";

import { Link } from "react-router-dom";

function Form() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const getTasks = () => {
    API.getTasks().then((response) => setTasks(response.data));
  };

  useEffect(() => {
    getTasks();
  }, []);

  const addNewTask = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!newTask) return;

    API.addTask(newTask).then(() => {
      setNewTask("");
      getTasks();
    });
  };

  const completeTask = (id: string) => {
    API.toggleCompletion(id).then(() => getTasks());
  };

  return (
    <>
      <form>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.currentTarget.value)}
        />
        <button onClick={addNewTask} disabled={!newTask}>
          ADD
        </button>
      </form>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <h3>New Tasks</h3>
          <ol>
            {tasks.map(
              (task) =>
                !task.completed && (
                  <li key={task._id}>
                    <span onClick={() => completeTask(task._id)}>O </span>
                    <Link
                      to={"/" + task._id}
                      style={{
                        textDecoration: task.completed
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {task.text}
                    </Link>
                  </li>
                )
            )}
          </ol>
        </div>
        <div>
          <h3>Completed Tasks</h3>
          <ol>
            {tasks.map(
              (task) =>
                task.completed && (
                  <li key={task._id}>
                    <span onClick={() => completeTask(task._id)}>O </span>
                    <Link
                      to={"/" + task._id}
                      style={{
                        textDecoration: task.completed
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {task.text}
                    </Link>
                  </li>
                )
            )}
          </ol>
        </div>
      </div>
    </>
  );
}

export default Form;

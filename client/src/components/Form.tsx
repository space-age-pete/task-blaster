import React, { useState, useEffect } from "react";
// import { textChangeRangeIsUnchanged } from "typescript";

interface Task {
  text: String;
  completed: Boolean;
  dateAdded: Date;
  dateCompleted?: Date;
}

function Form() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const anExample: Task = {
    text: "do this",
    completed: false,
    dateAdded: new Date(),
  };

  useEffect(() => {
    let uh: Task[];
    const oldTasks = localStorage.getItem("tasks");
    uh = oldTasks ? JSON.parse(oldTasks) : [];

    setTasks(uh);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addNewTask = (e: React.MouseEvent) => {
    e.preventDefault();

    setTasks((tasks) => [
      ...tasks,
      {
        text: newTask,
        completed: false,
        dateAdded: new Date(),
      },
    ]);
    setNewTask("");
  };

  const completeTask = (index: number) => {
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    setTasks(tempTasks);
  };

  return (
    <>
      <form>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.currentTarget.value)}
        />
        <button onClick={addNewTask}>ADD</button>
      </form>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h3>New Tasks</h3>
          <ol>
            {tasks.map(
              (task, i) =>
                !task.completed && (
                  <li
                    key={i}
                    style={{
                      textDecoration: task.completed ? "line-through" : "none",
                    }}
                    onClick={() => completeTask(i)}
                  >
                    {task.text}
                  </li>
                )
            )}
          </ol>
        </div>
        <div>
          <h3>Completed Tasks</h3>
          <ol>
            {tasks.map(
              (task, i) =>
                task.completed && (
                  <li
                    key={i + 100}
                    style={{
                      textDecoration: task.completed ? "line-through" : "none",
                    }}
                    onClick={() => completeTask(i)}
                  >
                    {task.text}
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

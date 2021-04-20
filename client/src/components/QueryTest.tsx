import React, { useState, useEffect } from "react";
import API, { Task } from "../utils/API";

import { Link } from "react-router-dom";
import { gql, useMutation, useQuery } from "@apollo/client";

const GET_TASKS = gql`
  query {
    getTasks {
      id
      taskName
      completed
      category {
        categoryName
      }
    }
  }
`;

const ADD_TASK = gql`
  mutation {
    createTask(taskName: "get internet") {
      id
      taskName
      completed
      notes
      category_id
    }
  }
`;

interface TaskData {
  id: number;
  taskName: string;
  completed: boolean;
  category: {
    categoryName: string;
  };
}

function QueryTest() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const { loading, data } = useQuery<TaskData>(GET_TASKS);
  console.log({ loading, data });

  const [addTask] = useMutation(ADD_TASK);

  const addNewTask = (e: React.MouseEvent) => {
    e.preventDefault();

    addTask();
  };

  return (
    <>
      <pre>{data && JSON.stringify(data, null, 2)}</pre>
      <button onClick={addNewTask}>ADD TASK</button>
    </>
  );
}

export default QueryTest;

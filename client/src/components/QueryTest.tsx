import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { gql, useMutation, useQuery } from "@apollo/client";
import { CategoryData, GET_CATEGORIES, Task, TaskData } from "../utils/graphql";

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
  mutation createTask($newTask: TaskInput!) {
    createTask(newTaskData: $newTask) {
      id
      taskName
      completed
      notes
      category_id
    }
  }
`;

interface NewTaskDetails {
  taskName: string;
  category_id: number;
}

function QueryTest() {
  const [newTask, setNewTask] = useState("");
  const [newTaskCategoryID, setNewTaskCategoryID] = useState(0);

  //CAN PROBABLY GET BOTH OF THESE IN ONE DOUBLE QUERY
  //OR EVEN IN A SINGLE ONE IF I PUT SOME THOUGHT INTO IT LOL

  const { loading, data } = useQuery<TaskData>(GET_TASKS);
  console.log({ loading, data });

  const { loading: loading2, data: data2 } = useQuery<CategoryData>(
    GET_CATEGORIES
  );
  console.log({ loading2, data2 });

  const [addTask] = useMutation<
    { createTask: Task },
    { newTask: NewTaskDetails }
  >(ADD_TASK, {
    variables: {
      newTask: { taskName: newTask, category_id: newTaskCategoryID },
    },
  });

  const addNewTask = (e: React.MouseEvent) => {
    e.preventDefault();

    addTask();
  };

  const handleDropdown = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const catID = +event.target.value;
    if (typeof catID === "number") setNewTaskCategoryID(catID);
  };

  if (loading || loading2) return <h1>:-/</h1>;

  return (
    <>
      {data2?.getCategories && (
        <form>
          <label htmlFor="cars">Choose a category:</label>

          <select name="cars" id="cars" onChange={handleDropdown}>
            <option value="0">select:</option>
            {data2.getCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.categoryName}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.currentTarget.value)}
          />
          <button
            onClick={addNewTask}
            disabled={!(newTask && newTaskCategoryID)}
          >
            ADD
          </button>
        </form>
      )}
      <pre>{data && JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default QueryTest;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import API, { Task } from "../utils/API";

function Detail() {
  const { id } = useParams<{ id: string }>();

  const [task, setTask] = useState<Task>();

  useEffect(() => {
    API.getOneTask(id)
      .then((results) => setTask(results.data))
      .catch((err) => console.error(err));
  }, []);

  return <div>{task?.text}</div>;
}

export default Detail;

import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { GET_TASK } from "../utils/graphql";

function TaskDetail() {
  const { id } = useParams<{ id: string }>();
  console.log({ id });
  const { data, loading } = useQuery(GET_TASK, { variables: { id: +id } });
  console.log({ data, loading });

  if (!loading && !data)
    return (
      <>
        <h2>Oops haha WRONG </h2>
        <Link to="/">BACK</Link>
      </>
    );

  return (
    <>
      <pre>{data && JSON.stringify(data, null, 2)}</pre>
      <Link to="/">BACK</Link>
    </>
  );
}

export default TaskDetail;

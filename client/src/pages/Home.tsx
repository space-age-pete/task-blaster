import React, { useState } from "react";

import Message from "../components/Message";
import Form from "../components/Form";
import API from "../utils/API";
import QueryTest from "../components/QueryTest";

type Color = {
  backgroundColor: "darkRed" | "lightBlue" | "lightGreen" | "white";
  textColor: "red" | "blue" | "green" | "black";
};

function Home() {
  const [currentColor, setCurrentColor] = useState<Color>({
    backgroundColor: "white",
    textColor: "black",
  });

  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    API.getTasks();

    //not sure of difference between target and currentTarget in this context
    switch (event.currentTarget.value) {
      case "red":
        setCurrentColor({ backgroundColor: "darkRed", textColor: "red" });
        break;
      case "blue":
        setCurrentColor({ backgroundColor: "lightBlue", textColor: "blue" });
        break;
      case "green":
        setCurrentColor({ backgroundColor: "lightGreen", textColor: "green" });
        break;
    }
  };

  return (
    <>
      <div className="App" style={{ padding: "75px" }}>
        <Message text={"hello it's me josh"} />

        <QueryTest />
      </div>
      {/* <Form /> */}
    </>
  );
}

export default Home;

// plans
// add categories, importance level
// build out backend start with REST + Mongo
// router/single pages for tasks to edit them
// make it say 5 days ago
// drag or hover functionality idk
// eventually do GraphQL and maybe Postgres
// maybe do a login thing? Redux?

//UI/UX:
//drag api tasks to rearrange the order (or even arrows?)
//+ - signs to increase size of font of tasks

// ts-node

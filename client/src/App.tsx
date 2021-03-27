import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./components/Message";
import Form from "./components/Form";
import API from "./utils/API";

type Color = {
  backgroundColor: "darkRed" | "lightBlue" | "lightGreen" | "white";
  textColor: "red" | "blue" | "green" | "black";
};

function App() {
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
      <div className="App">
        <Message text={"hello it's me josh"} />
        <div
          style={{
            color: currentColor?.textColor,
            backgroundColor: currentColor?.backgroundColor,
            width: "250px",
            height: "250px",
          }}
        >
          THIS IS THE BOX
        </div>
        <div className="buttonTown">
          <button value="red" onClick={handleButtonClick}>
            RED
          </button>
          <button value="blue" onClick={handleButtonClick}>
            BLUE
          </button>
          <button value="green" onClick={handleButtonClick}>
            GREEN
          </button>
        </div>
      </div>
      <Form />
    </>
  );
}

export default App;

// plans
// add categories, importance level
// build out backend start with REST + Mongo
// router/single pages for tasks to edit them
// make it say 5 days ago
// drag or hover functionality idk
// eventually do GraphQL and maybe Postgres
// maybe do a login thing? Redux?

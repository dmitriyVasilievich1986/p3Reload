import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div
        style={{
          width: "100vw",
          overflow: "scroll",
          height: "calc(100% + 3rem)",
        }}
      >
        <div
          style={{
            width: "fit-content",
            display: "flex",
            gap: "3rem",
          }}
        ></div>
      </div>
    </React.Fragment>
  );
}

export default App;

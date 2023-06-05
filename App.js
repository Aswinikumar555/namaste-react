import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "hellow world from react");
console.log("heading ", heading);
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "h1"),
    React.createElement("h2", {}, "h2"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

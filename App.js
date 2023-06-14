import React from "react";
import ReactDOM from "react-dom/client";

// core react
// React.createElement => ReactElement Js Object => HTMLElement(render)
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

// JSX (Transpile before it reaches to JS Engine) - PARCEL - Babel
// JSX =>  React.createElement =>  ReactElement Js Object => HTMLElement(render)

// React Element
const jsxHeading = (
  <h1 id="jsx-head" className="jsx-class" tabIndex="1">
    jsx heading
  </h1>
);

// React Component
const TitleComponent = () => <div>Title</div>;

// component Composition
const HeadingComponent = () => {
  return (
    <div id="component-div">
      <TitleComponent />
      {TitleComponent()}
      {<h2>second heading</h2>}
      HeadingComponent
    </div>
  );
};
console.log("jsxHeading ", jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
// root.render(jsxHeading);
// root.render(HeadingComponent());

root.render(<HeadingComponent />);
root2.render(<HeadingComponent />);

import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Index = () => {
  return <div className="red">Hello from React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
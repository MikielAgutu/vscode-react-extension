import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import InteractionApi from './Interaction/InteractionApi';

const Index = () => {
  return <>
  <button onClick={() => {InteractionApi.showInformationMessage("Emojis are in vogue at the moment 🐛")}}>Click me</button>
    <div className="red">Hello from React!</div>
  </>
};

ReactDOM.render(<Index />, document.getElementById("index"));
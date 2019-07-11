import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import InteractorFactory from './Interaction/InteractorFactory';

const Interactor = InteractorFactory.create(); 

const Index = () => {
  return <>
  <button onClick={() => {Interactor.showInformationMessage("Emojis are in vogue at the moment 🐛")}}>Click me</button>
    <div className="red">Hello from React!</div>
  </>
};

ReactDOM.render(<Index />, document.getElementById("index"));
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function tryAcquireRealVsCodeApi() {
  try {
    return acquireVsCodeApi();
  }
  catch { // In this case we are not in VsCode context
    return null;
  }
}

const realVsCodeApi = tryAcquireRealVsCodeApi();

const interactionApi = {
  showInformationMessage: function(text) {
    if (realVsCodeApi === null) {
      alert(text);
    }
    else {
      realVsCodeApi.postMessage({
        command: 'showInformationMessage',
        text: text
    })
    }
  }
}

const Index = () => {
  return <>
  <button onClick={() => {interactionApi.showInformationMessage("Emojis are in vogue at the moment 🐛")}}>Click me</button>
    <div className="red">Hello from React!</div>
  </>
};

ReactDOM.render(<Index />, document.getElementById("index"));
function tryAcquireRealVsCodeApi() {
  try {
    return acquireVsCodeApi();
  }
  catch { // In this case we are not in VsCode context
    return null;
  }
}

const realVsCodeApi = tryAcquireRealVsCodeApi();

const InteractionApi = {
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

export default InteractionApi;
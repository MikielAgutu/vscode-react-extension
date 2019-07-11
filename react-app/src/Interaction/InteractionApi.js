import BrowserInteraction from './BrowserInteraction';
import VsCodeInteractionFactory from './VsCodeInteractionFactory';

function tryAcquireRealVsCodeApi() {
  try {
    return acquireVsCodeApi();
  }
  catch { // In this case we are not in VsCode context
    return null;
  }
}

const realVsCodeApi = tryAcquireRealVsCodeApi();

let ToExport;

if (realVsCodeApi === null) {
  ToExport = BrowserInteraction;
}
else {
  ToExport = VsCodeInteractionFactory.createFromVsCode(realVsCodeApi);
}

export default ToExport;
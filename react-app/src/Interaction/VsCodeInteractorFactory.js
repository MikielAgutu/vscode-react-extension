import Interactor from "./Interactor";

function createFromVsCodeApi(vscode) {
  Interactor.showInformationMessage = text =>
    vscode.postMessage({
    command: 'showInformationMessage',
    text: text
  });

  return Interactor;
}

const VsCodeInteractorFactory = {
  createFromVsCodeApi: vscode => createFromVsCodeApi(vscode)
}

export default VsCodeInteractorFactory;
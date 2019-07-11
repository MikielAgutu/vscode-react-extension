import InteractionInterface from "./InteractionInterface";

function createFromVsCode(vscode) {
  InteractionInterface.showInformationMessage = text =>
    vscode.postMessage({
    command: 'showInformationMessage',
    text: text
  });

  return InteractionInterface;
}

const VsCodeInteractionFactory = {
  createFromVsCode: vscode => createFromVsCode(vscode)
}

export default VsCodeInteractionFactory;
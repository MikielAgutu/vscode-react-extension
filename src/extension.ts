import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

const startCommandName = 'extension.startExtension';
const webViewPanelTitle = 'React extension';
const webViewPanelId = 'reactExtension';

let webViewPanel : vscode.WebviewPanel;

function startCommandHandler(context: vscode.ExtensionContext): void {
  const showOptions = {
    enableScripts: true
  };

  const panel = vscode.window.createWebviewPanel(
    webViewPanelId,
    webViewPanelTitle,
    vscode.ViewColumn.One,
    showOptions
  );

  panel.webview.html = getHtmlForWebview();
  panel.webview.onDidReceiveMessage(
    onPanelDidReceiveMessage,
    undefined,
    context.subscriptions
  );

  panel.onDidDispose(onPanelDispose, null, context.subscriptions);

  webViewPanel = panel;
}

function onPanelDispose(): void {
  // Clean up panel here
}

function onPanelDidReceiveMessage(message: any) {
  switch (message.command) {
    case 'showInformationMessage':
      vscode.window.showInformationMessage(message.text);
      return;

    case 'getDirectoryInfo':
      runDirCommand((result : string) => webViewPanel.webview.postMessage({ command: 'getDirectoryInfo', directoryInfo: result }));
      return;
  }
}

function runDirCommand(callback : Function) {
  var spawn = require('child_process').spawn;
  var cp = spawn(process.env.comspec, ['/c', 'dir']);
  
  cp.stdout.on("data", function(data : any) {
    const dataString = data.toString();

    callback(dataString);
  });
  
  cp.stderr.on("data", function(data : any) {
    // No op
  });
}

function getHtmlForWebview(): string {
  try {
    const reactApplicationHtmlFilename = 'index.html';
    const htmlPath = path.join(__dirname, reactApplicationHtmlFilename);
    const html = fs.readFileSync(htmlPath).toString();

    return html;
  }
  catch (e) {
    return `Error getting HTML for web view: ${e}`;
  }
}

export function activate(context: vscode.ExtensionContext) {
  const startCommand = vscode.commands.registerCommand(startCommandName, () => startCommandHandler(context));

  context.subscriptions.push(startCommand);
}
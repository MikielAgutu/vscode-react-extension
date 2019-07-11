import * as vscode from 'vscode';

const startCommandName = 'extension.helloWorld';

function startCommandHandler(context: vscode.ExtensionContext) : void {
  const showOptions = {};
  const panel = vscode.window.createWebviewPanel(
    'helloWorld',
    'Hello World',
    vscode.ViewColumn.One,
    showOptions
  );

  panel.webview.html = getHtmlForWebview();
  panel.onDidDispose(onPanelDispose, null, context.subscriptions)
}

function onPanelDispose() {
  // Clean up panel here
}

function getHtmlForWebview() : string {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cat Coding</title>
  </head>
  <body>
      <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
  </body>
  </html>`;
}

export function activate(context: vscode.ExtensionContext) {
  const startCommand = vscode.commands.registerCommand(startCommandName, () => startCommandHandler(context));

  context.subscriptions.push(startCommand);
}
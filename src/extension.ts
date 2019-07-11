import * as vscode from 'vscode';

const startCommandName = 'extension.helloWorld';

function startCommandHandler() : void {
  const showOptions = {};
  const panel = vscode.window.createWebviewPanel(
    'helloWorld',
    'Hello World',
    vscode.ViewColumn.One,
    showOptions
  );

  panel.webview.html = getHtmlForWebview();
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
  const startCommand = vscode.commands.registerCommand(startCommandName, startCommandHandler);

  context.subscriptions.push(startCommand);
}
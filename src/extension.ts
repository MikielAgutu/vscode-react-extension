import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

const startCommandName = 'extension.startExtension';
const webViewPanelTitle = 'Custom extension';
const webViewPanelId = 'customExtension';
const extensionName = "testextension";
const publisherName = "redgate";

function startCommandHandler(context: vscode.ExtensionContext) : void {
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
  panel.onDidDispose(onPanelDispose, null, context.subscriptions)
}

function onPanelDispose() : void {
  // Clean up panel here
}

function getExtensionPath() : string {
  const extensionNameWithPublisher = `${publisherName}.${extensionName}`;
  const extension = vscode.extensions.getExtension(extensionNameWithPublisher);

  if (extension) {
    return extension.extensionPath;
  }

  throw 'Could not find extension';
}

function getHtmlForWebview() : string {
  try {
    const extensionPath = getExtensionPath();
    const extensionHtmlFilePath = './extension.html';
    const htmlPath = path.join(extensionPath, extensionHtmlFilePath);
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
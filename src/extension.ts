import * as vscode from 'vscode';

const startCommandName = 'extension.startExtension';
const webViewPanelTitle = "Custom extension";
const webViewPanelId = "customExtension";

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
      <br />
      <strong>React application running in VsCode:</strong><br />
      <div id="react-app-container"></div>

      <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
      <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    
      <!-- Load our React component. -->
      <script>
        'use strict';

        const e = React.createElement;

        class LikeButton extends React.Component {
          constructor(props) {
            super(props);
            this.state = { liked: false };
          }

          render() {
            if (this.state.liked) {
              return 'You liked this.';
            }

            return e(
              'button',
              { onClick: () => this.setState({ liked: true }) },
              'Like'
            );
          }
        }

        const domContainer = document.querySelector('#react-app-container');
        ReactDOM.render(e(LikeButton), domContainer);
      </script>
    </body>
  </html>`;
}

export function activate(context: vscode.ExtensionContext) {
  const startCommand = vscode.commands.registerCommand(startCommandName, () => startCommandHandler(context));

  context.subscriptions.push(startCommand);
}
# VSCode React extension sample

Sample of a VsCode extension using React.

This uses the WebView API for VsCode to create a visual extension using plain React for the front end.

The VSCode extension integration sits at the top, with the react application living in a folder below it. Note they have separate `package.json` files.

The React application is designed to be decoupled from VsCode, so it can be debugged and developed using a normal browser.

You should be able to install npm packages (Redux, etc) as you would normally. However, note that VSCode is a resource-limited, restrictive enviornment. Therefore it's likely some packages won't work. Ideally you want to depend on lightweight libraries, and as few as possible. (This is true of all software development but now you have no excuse 😉)

![What it looks like](./example.png)

## How to use

### Debug in VsCode

- Open the project in VsCode
- `npm install`
- Navigate to `/react-app`
- `npm install`
- Press `f5`
- Open the command selector (`ctrl+shift+p`)
- Search for the extension (`VsCode React extension`) and press enter

### Debug React UI by itself

- Navigate to `/react-app`
- `npm run start:dev`

## Resources

- [VsCode Extension API](https://code.visualstudio.com/api)
- [VsCode WebView API](https://code.visualstudio.com/api/extension-guides/webview)
- [React](https://reactjs.org/)


## TODOs

- Set a content security policy for scripts
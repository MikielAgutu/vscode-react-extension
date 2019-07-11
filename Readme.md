# VSCode React extension sample

Sample of how to create a VsCode extension using React.

This uses the WebView API for VsCode to create a visual extension using plain React for the front end.

The React application is designed to be decoupled from VsCode, so it can be debugged and developed using a normal browser. You should also be able to use all the usual npm packages (React Router, Redux, etc) as you would normally.

## How to use

### Debug in VsCode

- Open the project in VsCode
- Press `f5`

### Debug React UI by itself

- Navigate to `/react-app`
- `npm run start:dev`

## TODOs

- Set a content security policy for scripts
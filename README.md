# Web Component Dev Environment
## Introduction

This project is an attempt to build a ready-to-use starter for building and consuming native web components. 
I intended to have most things work like any modern javascript/[ECMAScript] framework or library. The idea is to take a familiar and friction-less approach at making web components easier to write with little additional code.

## Features
 - [x] Allows npm modules to easily be imported and used like you normally would with requireJS modules
 - [x] Compatible with other web components and vanilla JS from outside the project
 - [x] Exports code that can be added to other vanilla JS projects without relying on pre-existing libraries.
 - [x] Build tools for making minified bundles, local dev-server


## Building
`npm run build` then look in the `dist` folder

Also, `npm run start` will host a local dev server `localhost:9000`


## Goals

 - [x] Improve webpack console output to indicate success status and localhost+port_number.
 - [ ] Move Router out to separate project, npm module, and dependency
 - [ ] Add optional JSX rendering function, babel plugins.
 - [ ] Add optional global/local state pub/sub
 - [ ] Build a CLI for this project to generate project templates and other smaller files.
 - [ ] Build a GUI for CLI
 - [ ] Establish conventions

## License
MIT License





[ECMAScript]:<[https://en.wikipedia.org/wiki/ECMAScript](https://en.wikipedia.org/wiki/ECMAScript)>


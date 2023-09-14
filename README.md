# Emojipedia

This is a React app that displays a list of emoji terms and their meanings.

## Instructions

To run this project:

1. Clone the repo
2. Run `npm install` to install dependencies
3. Run `npm start` to start the dev server
4. View the app at http://localhost:3000

## Overview

- `App.jsx` - This is the main App component that renders the emojipedia entries. It imports the emojipedia data and the Entry component. It maps over the emojipedia data to create Entry components.

- `Entry.jsx` - This is a component that displays a single entry in the emojipedia. It displays the emoji, name, and meaning for one entry. 

- `emojipedia.js` - This contains the data for the emojipedia entries. It exports an array of objects, each representing one entry.

- `index.js` - This renders the App component to the DOM.

## App component

The App component imports the emojipedia data and the Entry component. 

It has a `createEntry` function that takes in one emojipedia entry object and returns an Entry component, passing the data as props.

The `App` function maps over the emojipedia data, calling `createEntry` for each one to create an array of Entry components.

It renders the Entry components inside a `<dl>` tag to create a definition list.

## Entry component

The Entry component displays the data for one emojipedia entry.

It takes `name`, `emoji`, and `meaning` as props and displays them appropriately.

The emoji is displayed big using a `<span>` with role="img". The name and meaning are also displayed.

## emojipedia data

This contains an array of objects, each representing one entry in the emojipedia. 

Each object has an `id`,`emoji`, `name`, and `meaning`.

## index.js

This renders the App component to the DOM using ReactDOM.

It grabs the `#root` element and renders `<App />` inside of it.

So in summary, App creates the list of entries from the emojipedia data, Entry displays each entry, and index.js renders App to the DOM.

## Dependencies

- **React** - The React library for building user interfaces. Used to build components.

- **react-dom** - Used for rendering React components to the DOM. Specifically using `react-dom/client` to create the root. 

- **Babel** - Babel transforms JSX into vanilla JavaScript. Allows us to use JSX syntax. Included as part of Create React App.
import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from "./routes/App";

//ReactDOM.render(<App />, document.getElementById("app"))


const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);

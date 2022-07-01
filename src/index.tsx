import { createRoot } from 'react-dom/client';
import { App } from './components/App/App';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App/>);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { unregister } from './serviceWorker';
//
// import './index.scss';
// import { App } from './components/App/App';
//
// ReactDOM.render(<App/>, document.getElementById('root'));
// unregister();
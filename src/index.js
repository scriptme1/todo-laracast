import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <AppClass /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

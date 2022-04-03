import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container as any);
root.render(<BrowserRouter><App /></BrowserRouter>);

reportWebVitals();
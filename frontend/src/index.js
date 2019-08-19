import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Components/App';
import { BrowserRouter as Router } from 'react-router-dom'
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router> <App /> </Router>, document.getElementById('root')
)


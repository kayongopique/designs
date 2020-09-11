import ReactDOM from 'react-dom';
import React from 'react';
import './bootstrap';
import { Route, Switch, BrowserRouter } from 'react-router-dom';



import App from './app';

ReactDOM.render((
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>

), document.getElementById('root'));

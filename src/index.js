import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from 'Root';
import App from 'components/App';
import Ask from 'components/Ask';
import 'assets/styles/reset.css';

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route path="/" component={App} />
      <Route exact path="/ask" component={Ask} />
    </BrowserRouter>
  </Root>,
  document.querySelector('#root')
);

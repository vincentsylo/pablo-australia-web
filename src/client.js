import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import App from './views/App';

const data = window.__PRELOADED_DATA__;
delete window.__PRELOADED_DATA__;

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <App {...data} />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('app'),
  );
};

render();

if (module.hot) {
  module.hot.accept('./views/App', () => {
    const NextRootContainer = require('./views/App'); // eslint-disable-line
    render(NextRootContainer);
  });
}

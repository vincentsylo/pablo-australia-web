import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './views/App';

const prefetchedData = window.__PREFETCHED_DATA__;
const store = configureStore(prefetchedData);
delete window.__PREFETCHED_DATA__;

const appData = window.__APP_DATA__;
delete window.__APP_DATA__;

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <App {...appData} />
        </BrowserRouter>
      </Provider>
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

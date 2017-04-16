import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import _ from 'lodash';
import { Provider } from 'react-redux';
import htmlTemplate from './htmlTemplate';
import App from '../views/App';
import routes from '../routes';
import configureStore from '../store/configureStore';

export default async function render(req, res) {
  const promises = [];
  routes.some((route) => {
    const match = matchPath(req.url, route);
    if (match && _.has(route, 'component.fetch')) {
      promises.push(route.component.fetch(match));
    }
    return match;
  });

  const [prefetchedData] = await Promise.all(promises);
  const store = configureStore({ prefetchedData });

  const context = {};

  const html = renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>,
  );

  if (context.url) {
    res.writeHead(301, { Location: context.url });
  } else {
    res.send(htmlTemplate({ html, store: store.getState() }));
  }
}

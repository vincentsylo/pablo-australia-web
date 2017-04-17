import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import htmlTemplate from './htmlTemplate';
import App from '../views/App';
import configureStore from '../store/configureStore';
import fetchData from './fetchData';

export default async function render(req, res) {
  const promises = [
    App.fetch(),
    fetchData(req),
  ];

  const [appData, prefetchedData] = await Promise.all(promises);
  const store = configureStore({ prefetchedData });

  const context = {};

  const html = renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <Provider store={store}>
        <App {...appData} />
      </Provider>
    </StaticRouter>,
  );

  const helmet = Helmet.renderStatic();

  if (context.url) {
    res.writeHead(301, { Location: context.url });
  } else {
    res.send(htmlTemplate({ html, store: store.getState(), appData, helmet }));
  }
}

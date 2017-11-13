import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import htmlTemplate from './htmlTemplate';
import App from '../views/App';
import configureStore from '../store/configureStore';
import fetchData from './fetchData';
import { validateCache } from './serverCache';

const getPage = async (req) => {
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
  return { html, store: store.getState(), appData, helmet, cacheTime: Date.now() };
};

export default async function cachePage(req, res) {
  const html = await validateCache(req, res, getPage);
  res.send(htmlTemplate(html));
}

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import htmlTemplate from './htmlTemplate';
import App from '../views/App';
import routes from '../routes';

export default async function render(req, res) {
  const context = {};

  const html = renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App />
    </StaticRouter>,
  );

  const promises = [];
  routes.some((route) => {
    const match = matchPath(req.url, route);
    if (match && route.fetch) {
      promises.push(route.fetch(match));
    }
    return match;
  });

  const [data] = await Promise.all(promises);

  if (context.url) {
    res.writeHead(301, { Location: context.url });
  } else {
    res.send(htmlTemplate({ html, data }));
  }
}

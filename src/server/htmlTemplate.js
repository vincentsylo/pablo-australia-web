import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import assets from 'assets';

export default ({ html, store, appData }) => `
  <!DOCTYPE html>
  ${
    renderToStaticMarkup((
      <html lang="en">
        <head>
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet" />
          {assets.app.css ? <link rel="stylesheet" type="text/css" href={assets.app.css} /> : null}
        </head>

        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: html }} />
          <script dangerouslySetInnerHTML={{ __html: `window.__PREFETCHED_DATA__ = ${JSON.stringify(store)}; window.__APP_DATA__ = ${JSON.stringify(appData)}` }} />
          <script src="https://use.fontawesome.com/991f6bb4f8.js" />
          <script async type="text/javascript" src={assets.app.js} />
        </body>
      </html>
    ))
  }`;

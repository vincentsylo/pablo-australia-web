import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import assets from 'assets';

export default ({ html, data }) => `
  <!DOCTYPE html>
  ${
    renderToStaticMarkup((
      <html lang="en">
        <head>
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet" />
          {assets.app.css ? <link rel="stylesheet" type="text/css" href={assets.app.css} /> : null}
        </head>

        <body>
          <div id="app">${html}</div>
          <script dangerouslySetInnerHTML={{ __html: `window.__PRELOADED_DATA__ = ${JSON.stringify(data)};` }} />
          <script async type="text/javascript" src={assets.app.js} />
        </body>
      </html>
    ))
  }`;

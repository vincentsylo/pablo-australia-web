import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import assets from 'assets';
import favicon from '../views/images/favicon.ico';
import ogImage from '../views/images/og-image.jpg';
import appleTouchIcon from '../views/images/apple-touch-icon.png';

export default ({ html, store, appData, helmet }) => `
  <!DOCTYPE html>
  ${
    renderToStaticMarkup((
      <html lang="en">
        <head>
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet" />
          <meta name="viewport" content="width=device-width, initial-scale=1 ,minimum-scale=1, maximum-scale=1, user-scalable=no" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="PABLO Australia: Japan's #1 cheese tarts is now available in Australia." />
          <meta name="keywords" content="PABLO, PABLO Australia, cheese tart, Japan" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="" />
          <meta property="og:description" content="" />
          <meta property="og:url" content="https://www.pabloaustralia.com/" />
          <meta property="og:image" content={ogImage} />
          <meta property="og:site_name" content="" />
          <meta property="og:locale" content="en_AU" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="apple-touch-icon" href={appleTouchIcon} />
          <link rel="shortcut icon" href={favicon} />
          {assets.app.css ? <link rel="stylesheet" type="text/css" href={assets.app.css} /> : null}
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
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

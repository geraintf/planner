import React from 'react';

const Html = ({ content, initialState }) => (
  <html lang="en">
    <head>
      <title>Slide</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
      <div id="root">${ content }</div>
      <script
        dangerouslySetInnerHTML={{ __html: `window.__initialState__=${JSON.stringify(initialState)};` }}
        charSet="UTF-8"
      />
      <script src="/bundle.js"></script>
    </body>
  </html>
);

export default Html;
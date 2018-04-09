import React from 'react';
import PropTypes from 'prop-types';

const Html = ({ content, initialState }) => (
  <html lang="en">
    <head>
      <title>Slide</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
      <div id="root">${ content }</div>
      <script
        dangerouslySetInnerHTML={{ __html: `window.__initialState__=${JSON.stringify(initialState)};` }} // eslint-disable-line react/no-danger
        charSet="UTF-8"
      />
      <script src="/bundle.js" />
    </body>
  </html>
);

Html.propTypes = {
  content: PropTypes.string.isRequired,
  initialState: PropTypes.object.isRequired
};

export default Html;

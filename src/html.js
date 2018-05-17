import React from 'react';
import PropTypes from 'prop-types';

const Html = ({ content, initialState, manifest }) => {
  const {
    main: {
      js: jsBundle,
      css: cssBundle
    },
    vendor: {
      js: vendorBundle
    }
  } = manifest;

  return (
    <html lang="en">
      <head>
        <title>Slide</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href={cssBundle} type="text/css" />
      </head>
      <body>
        <div id="root">${ content }</div>
        <script
          dangerouslySetInnerHTML={{ __html: `window.__initialState__=${JSON.stringify(initialState)};` }} // eslint-disable-line react/no-danger
          charSet="UTF-8"
        />
        <script type="text/javascript" src={vendorBundle} />
        <script type="text/javascript" src={jsBundle} />
      </body>
    </html>);
};

Html.propTypes = {
  content: PropTypes.string.isRequired,
  initialState: PropTypes.object.isRequired,
  manifest: PropTypes.object.isRequired,
};

export default Html;

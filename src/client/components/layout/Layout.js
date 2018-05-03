import React from 'react';
import PropTypes from 'prop-types';

import './Layout.less';

const Layout = props => (
  <div className="default-layout">
    { props.children }
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

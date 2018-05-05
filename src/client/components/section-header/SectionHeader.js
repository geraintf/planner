import React from 'react';
import PropTypes from 'prop-types';

import './SectionHeader.less';

const SectionHeader = ({ text }) => (
  <div className="section-header">
    <h2>{ text }</h2>
  </div>
);

SectionHeader.propTypes = {
  text: PropTypes.string.isRequired
};

export default SectionHeader;

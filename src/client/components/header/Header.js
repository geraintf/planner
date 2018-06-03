import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  firstName: state.user.firstName
});

const Header = ({ firstName }) => {

  return (
    <header>
      <div>{ `Morning ${firstName}` }</div>
      <div>Log out</div>
    </header>
  );
};

Header.propTypes = {
  firstName: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(Header);

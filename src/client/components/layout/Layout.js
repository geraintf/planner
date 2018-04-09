import React from 'react';

const Layout = (props) => {
    return (
        <div>
            { props.children }
        </div>
    )
};

Layout.propTypes = {};

export default Layout;
import React from 'react';
import Layout from '../components/layout/Layout';

const Login = () => (
  <Layout>
    <a href="/auth/login" className="btn btn-danger"><span className="fa fa-google-plus"></span> Google</a>
  </Layout>
);

export default Login;

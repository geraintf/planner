import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { clientStore } from "../configureStores";

import App from "../App";

const store = clientStore(window.__initialState__);
delete window.__initialState__;

const MOUNT_NODE = document.getElementById("root");

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , MOUNT_NODE);
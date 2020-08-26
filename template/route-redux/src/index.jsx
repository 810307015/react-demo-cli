import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { RouteComponents } from 'Components/util';
import routes from 'Routes';
import store from 'Store';

const browserHistory = createBrowserHistory();

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <RouteComponents routes={routes} />
      </Router>
    </Provider>,
    document.getElementById("root")
  );
}

render();
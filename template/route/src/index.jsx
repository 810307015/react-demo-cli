import React from "react";
import ReactDOM from "react-dom";
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { RouteComponents } from 'Components/util';
import routes from 'Routes';

const browserHistory = createBrowserHistory();

function render() {
  ReactDOM.render(
    <Router history={browserHistory}>
      <RouteComponents routes={routes} />
    </Router>,
    document.getElementById("root")
  );
}

render();
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import store from 'Store';

const lazyLoader = (callback) => {

  return (props) => {
    const Comp = React.lazy(callback);
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Comp {...props} />
      </React.Suspense>
    )
  }
}

const HelloWorld = lazyLoader(() => import('Components/test/HelloWorld'));

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <HelloWorld /> 
    </Provider>,
    document.getElementById("root")
  );
}

render();
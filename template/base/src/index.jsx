import React from "react";
import ReactDOM from "react-dom";

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
    <HelloWorld />,
    document.getElementById("root")
  );
}

render();
import React from 'react';
import { Switch, Route } from 'react-router-dom';

/**
 * 子路由渲染组件
 */
const RouteComponents = (props) => {
  const { routes } = props;

  return (
    <Switch>
      {
        routes.map((route, index) => {
          const { path, exact, children: childRoutes = [] } = route;
          return (
            <Route 
              path={path}
              exact={exact}
              key={`${path}-${index}`}
              render={(props) => <route.component {...props} childRoutes={childRoutes} />}
            />
          )
        })
      }
    </Switch>
  )
}

/**
 * 懒加载组件
 */
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

export {
  RouteComponents,
  lazyLoader
}
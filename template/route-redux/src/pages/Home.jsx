/**
 * 二级路由的公共页
 */
import React from 'react';

import { RouteComponents } from 'Components/util';

export default (props) => {
  const { childRoutes = [] } = props;

  return <RouteComponents routes={childRoutes} />
}
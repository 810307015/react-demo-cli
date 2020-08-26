/**
 * 首页
 */
import React from 'react';
import { Link } from 'react-router-dom';

export default () => {

  return (
    <div className="Index">
      首页
      <Link to="/hello">前往 /hello页面</Link>
    </div>
  )
}
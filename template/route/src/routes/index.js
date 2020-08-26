import { lazyLoader } from 'Components/util';

const Index = lazyLoader(() => import('Pages'));
const Home = lazyLoader(() => import('Pages/Home'));
const HelloWorld = lazyLoader(() => import('Components/test/HelloWorld'));

export default [
  {
    path: '/',
    component: Index,
    exact: true // 严格匹配展示首页
  },
  {
    path: '/',
    component: Home,
    exact: false, // 非严格匹配向下寻找二级路由
    children: [
      {
        path: '/hello',
        component: HelloWorld
      }
    ]
  }
];
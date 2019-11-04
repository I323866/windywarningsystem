import Login from './views/Login.vue';
import NotFound from './views/404.vue';
import Home from './views/Home.vue';
import Table from './views/nav1/Table.vue';
import Form from './views/nav1/Form.vue';
import user from './views/nav1/user.vue';
import Page4 from './views/nav2/Page4.vue';
import Page5 from './views/nav2/Page5.vue';
import Page6 from './views/nav3/Page6.vue';
import echarts from './views/charts/echarts.vue';
import monitor from './views/nav1/Monitor.vue';
import monitor1 from './views/nav1/Monitor1.vue';
import windrose from './views/charts/windrose.vue';
import windrose1 from './views/charts/windrose1.vue';
import windrose2 from './views/charts/windrose2.vue';
let routes = [
  {
    path: '/login',
    component: Login,
    name: '',
    hidden: true
  },
  {
    path: '/404',
    component: NotFound,
    name: '',
    hidden: true
  },
  //{ path: '/main', component: Main },
  {
    path: '/',
    component: Home,
    name: '跑道AWOS',
    // iconCls: 'fa fa-id-card-o',//图标样式class
    children: [
      { path: '/monitor1', component: monitor1, name: '虹桥机场跑道1' },
      { path: '/monitor2', component: monitor, name: '虹桥机场跑道2' }

      // { path: '/table', component: Table, name: 'Table' },
      // { path: '/form', component: Form, name: 'Form' },
      // { path: '/user', component: user, name: '列表' },
    ]
  },
  // {
  //     path: '/',
  //     component: Home,
  //     name: '导航二',
  //     iconCls: 'fa fa-id-card-o',
  //     children: [
  //         { path: '/page4', component: Page4, name: '页面4' },
  //         { path: '/page5', component: Page5, name: '页面5' }
  //     ]
  // },
  // {
  //     path: '/',
  //     component: Home,
  //     name: '',
  //     iconCls: 'fa fa-address-card',
  //     leaf: true,//只有一个节点
  //     children: [
  //         { path: '/page6', component: Page6, name: '导航三' }
  //     ]
  // },
  {
    path: '/',
    component: Home,
    name: '自动站',
    // iconCls: 'fa fa-bar-chart',
    children: [{ path: '/echarts', component: echarts, name: '自动站' }]
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
  }
];

export default routes;

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
import './common/less/index.less';

Vue.config.productionTip = false;

Vue.use(Router);
Vue.use(VueResource);

let routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
];

// 创建 router 实例，然后传 `routes` 配置
let router = new Router({
  routes,
  'linkActiveClass': 'active'
});

// 初始导航至goods
router.push('/goods');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

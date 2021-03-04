import './css/Publickstyle.css'; //PC
import './css/xyRmain.css'; //cover
import $ from 'jquery';
import Vue from 'vue/dist/vue.js';
import App from './App.vue';

import router from './router/router.js';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Router from 'vue-router'; // 解决路由嵌套报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

import VueBus from 'vue-bus';
Vue.use(VueBus);

import store from './script/store/store';
import Vuex from 'vuex';
Vue.use(Vuex)

import axios from 'axios'; //导入axios
// axios.defaults.baseURL = '/api' //关键代码，作用是我们每次发送的请求都会带一个/api的前缀
axios.defaults.baseURL = 'https://api.gzwjfh.com/'; //配置根域名
Vue.prototype.$axios = axios; //把axios挂载到Vue的原型上
Vue.config.productionTip = false

var vm = new Vue({
    el: '#App',
    render(createElements) {
        return createElements(App)
    },
    router,
    store,
})
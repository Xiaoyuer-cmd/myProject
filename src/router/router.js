import VueRouter from 'vue-router'; //引入路由依赖

var router = new VueRouter({
    routes: [{
        path: '/',
        component: () => import( /* webpackChunkName: "addEnterprise" */ '../view/entry/entry.vue'),
        // component: Index,
        meta: {
            title: '开发架构'
        }
    }, ]
})
export default router;
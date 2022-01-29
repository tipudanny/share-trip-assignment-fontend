import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {mapGetters} from "vuex";

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters['isLoggedIn']) {
            next();
        } else {
            next('/login');
        }
    } else if (to.path === '/login' && store.getters['isLoggedIn']) {
        next('/home');
    } else {
        next();
    }
})

new Vue({
    router,
    store,
    render: function (h) {
        return h(App)
    },
    computed: {
        ...mapGetters(['isLoggedIn'])
    },
}).$mount('#app')

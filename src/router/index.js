import Vue from 'vue'
import VueRouter from 'vue-router'

import Layouts from "../views/layouts/Layouts"

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: function () {
            return import(/* webpackChunkName: "login" */ '../views/Login.vue')
        }
    },
    {
        path: '/registration',
        name: 'Registration',
        component: function () {
            return import(/* webpackChunkName: "registration" */ '../views/Registration.vue')
        }
    },
    {
        path: '',
        component: Layouts,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '',
                redirect: '/products'
            },
            {
                path: '/home',
                name: 'home',
                component: function () {
                    return import(/* webpackChunkName: "dashboard" */ '../views/Home')
                }
            },
            {
                path: '/customers',
                name: 'Customers',
                component: function () {
                    return import(/* webpackChunkName: "customers" */ '../views/Customers.vue')
                }
            },
            {
                path: '/products',
                name: 'Product',
                component: function () {
                    return import(/* webpackChunkName: "products" */ '../views/Product.vue')
                }
            },
            {
                path: '/product/:id',
                name: 'ProductDetails',
                component: function () {
                    return import(/* webpackChunkName: "product-details" */ '../views/SingleProduct.vue')
                }
            },
            {
                path: '/all-orders',
                name: 'AllOrderDetails',
                component: function () {
                    return import(/* webpackChunkName: "all-order-details" */ '../views/Orders.vue')
                }
            },
            {
                path: '/orders',
                name: 'Orders',
                component: function () {
                    return import(/* webpackChunkName: "orders" */ '../views/UserOrders.vue')
                }
            },
            {
                path: '/order/:id',
                name: 'OrderDetails',
                component: function () {
                    return import(/* webpackChunkName: "order-details" */ '../views/OrderDetails.vue')
                }
            },
            {
                path: '/slab',
                name: 'Slab',
                component: function () {
                    return import(/* webpackChunkName: "slab" */ '../views/Slab.vue')
                }
            },
            {
                path: '/rate-setting',
                name: 'RateSetting',
                component: function () {
                    return import(/* webpackChunkName: "rate-setting" */ '../views/RateSetting.vue')
                }
            },
            {
                path: '/point-setting',
                name: 'PointSetting',
                component: function () {
                    return import(/* webpackChunkName: "point-setting" */ '../views/PointSetting.vue')
                }
            },
            {
                path: '/profile',
                name: 'Profile',
                component: function () {
                    return import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
                }
            },
        ]
    },
    // Not Found Page
    {
        path: "*",
        name: "NotFound",
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/PageNotFound')
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    },
    routes
})

export default router

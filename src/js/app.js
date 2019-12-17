import Vue from 'vue'
const Box = require('3box')
window._ = require('lodash')
import Cookies from 'js-cookie'
import router from './router'
Vue.component('wallet-connect', require('./App.vue').default)
Vue.component('svg-icon', require('./components/icons/icon.vue').default)
import vmodal from 'vue-js-modal'
var VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})
Vue.use(vmodal)
import { ValidationProvider,ValidationObserver, extend } from 'vee-validate'
import {    
    ext,
    email,
    digits,
    numeric,
    required,
    alpha_num,
    alpha_spaces
} from 'vee-validate/dist/rules'

window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbarwalletconnect").className = "fixed t-0 bg-gray-100 text-gray-900 h-16 z-40 w-full t-0 flex items-center justify-between px-5 sm:px-10 md:px-20 lg:px-24 xl:px-32 py-3 lg:py-2 shadow";
    } else {
        document.getElementById("navbarwalletconnect").className = "fixed t-0 text-white h-16 z-40 w-full t-0 flex items-center justify-between px-5 sm:px-10 md:px-20 lg:px-24 xl:px-32 py-3 lg:py-2 shadow";
    }
};
extend('ext', ext)
extend('email', email)
extend('digits', digits)
extend('numeric', numeric)
extend('required', required)
extend('alpha_num', alpha_num)
extend('alpha_spaces', alpha_spaces)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

const wts = new Vue({
    el: '#wallet-connect',
    router,
    mounted(){}
})
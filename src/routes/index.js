import Vue from 'vue'
import Router from 'vue-router'

import User from '../components/Users/User.vue'

Vue.use(Router)

const test = {
    template:'<div>asasas</div>'
}
const panel = {
    template:'<h1>Side panel</h1>'
}

const routes = [
    {path: '/user', component:User}
];

export function createRouter() {
    return new Router({
        mode:'history',
        routes
    });
}
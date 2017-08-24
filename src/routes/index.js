import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const test = {
    template:'<div>asasas</div>'
}

const routes = [
    {path: '/test', component: test}
];

export function createRouter() {
    return new Router({
        mode:'history',
        routes
    });
}
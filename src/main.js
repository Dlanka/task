import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Input from './components/form/Input.vue'

Vue.use(VueRouter)

const routes = [

    {path: '/form', component: Input}
]

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

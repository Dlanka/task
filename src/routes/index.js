import Vue from 'vue'
import Router from 'vue-router'

import User from '../components/Users/User.vue'
import UserForm from '../components/Users/form/form.vue'

Vue.use(Router);


const routes = [
    // User Router
    {
        path: '/user', component:User,
    },
    {
        path: '/user/add',
        components: {
            default: User,
            sidePanel: UserForm,
        },
        props: {
            default: true,
            sidePanel: {isSidePanel: true}
        }
    },
    {
            path: '/user/edit/:id',
            components: {
                default: User,
                sidePanel: UserForm,
            },
            props: {
                default: true,
                sidePanel: {isSidePanel: true}
            }
        }

];

export function createRouter() {
    return new Router({
        mode: 'history',
        routes
    });
}
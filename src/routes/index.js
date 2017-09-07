import Vue from 'vue'
import Router from 'vue-router'

import User from '../components/Users/User.vue'
import addUser from '../components/Users/form/addUser.vue'

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
            sidePanel: addUser,
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
                sidePanel: addUser,
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
import Vue from 'vue'
import App from './App.vue'
import Login from './components/Login/Login.vue'
import * as firebase from 'firebase'
import * as Components from './components/form/index'
import * as UIComponent from './components/UIComponent/index'
import {createRouter} from './routes/index'
import store from './store/index'

import TmSidePanel from './components/SidePanel/SidePanel.vue'


//plugin Components as globally
Object.values(Components).forEach(Component => {
    Vue.use(Component)
});
//plugin Components as globally
Object.values(UIComponent).forEach(UIComponent => {
    Vue.use(UIComponent)
});


Vue.component('tm-side-panel', TmSidePanel);

//Create router instance
const router = createRouter();

var logStatus = true;

var Layout = logStatus == true ? App : Login;


var vm = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(Layout),
    created() {
        firebase.initializeApp({
            apiKey: "AIzaSyAT7JP6Ct5T5rrl5jh5_u1-wYku7ofNaUo",
            authDomain: "task-ed685.firebaseapp.com",
            databaseURL: "https://task-ed685.firebaseio.com",
            projectId: "task-ed685",
            storageBucket: "task-ed685.appspot.com"
        });
    }
});

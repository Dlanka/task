import Vue from 'vue'
import App from './App.vue'
import * as Components from './components/form/index'
import {createRouter} from './routes/index'

import TmSidePanel  from './components/SidePanel/SidePanel.vue'

Vue.mixin({
    methods: {
        //Side Panel API
        showSidePanel(){
            Event.$emit('showSidePanel');
        },

        hideSidePanel(){
            Event.$emit('hideSidePanel');
        },

        toggleSidePanel(){
            Event.$emit('toggleSidePanel');
        }
    }

});

window.Event = new Vue();
//plugin Components as globally
Object.values(Components).forEach(Component => {
    Vue.use(Component)
});

Vue.component('tm-side-panel', TmSidePanel);

//Create router instance
const router = createRouter();


var vm = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

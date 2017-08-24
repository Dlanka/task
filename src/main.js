import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './routes/index'

import Input from './components/form/Input.vue'

//Create router instance
const router = createRouter();

new Vue({
    el: '#app',
    router,
    components:{
        Input
    },
    render: h => h(App)
});

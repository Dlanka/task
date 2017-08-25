
import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './routes/index'

import { formComponent }  from './components/form/index'

//Load Components as globally
formComponent.forEach((c)=>{
    Vue.component(c.tagName,c.tag);
});

//Create router instance
const router = createRouter();

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

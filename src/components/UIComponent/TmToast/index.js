import TmToast from './TmToast.vue'

TmToast.install = function install(Vue){
    Vue.component(TmToast.name,TmToast);
}

export default TmToast;
import TmCard from './TmCard.vue'

TmCard.install = function install(Vue){
    Vue.component(TmCard.name,TmCard);
}

export default TmCard;
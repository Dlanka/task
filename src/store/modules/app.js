const state = {
    isShowTopBar: false,
    isShowPanel: false,
    topButtonAction: null
};

const getters = {
    showTopBar: state => {
        return state.isShowTopBar;
    },

    showPanel: state => {
        return state.isShowPanel;
    },

    buttonAction: state => {
        return state.topButtonAction;
    }
};

const mutations = {
    toggleTopBar(state, payload) {
        state.isShowTopBar = payload;
    },

    showSideBar(state, payload) {
        state.isShowPanel = payload;
    },

    topButton(state, payload) {
        state.topButtonAction = payload;
    }
};

const actions = {
    toggleTopBar(context, payload) {
        context.commit('toggleTopBar', payload)
    },

    showSideBar(context, payload) {
        context.commit('showSideBar', payload)
    }
};


export default {
    state,
    getters,
    actions,
    mutations
}

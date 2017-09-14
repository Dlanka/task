const state = {
    toastMessage: '',
    msgType: '',
    isShowTopBar: false,
    isShowPanel: false,
    topButtonAction: null
};

const getters = {
    message: state => {
        return {
            type: state.msgType,
            text: state.toastMessage
        };
    },
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

    toast(state, payload) {
        state.msgType = payload.type;
        state.toastMessage = payload.text
    },

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
    toast(context, payload) {
        context.commit('toast', payload);
    },
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

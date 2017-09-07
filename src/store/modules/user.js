import {fetchData, allUser, addUser, getUserByKey} from "../../api/user"

const state = {
    users: [],
    user: null
};

const getters = {
    users: state => {
        return state.users;
    }
};

const mutations = {

    addUser(state, payload) {
        state.users.push(payload);
    },

    allUsers(state, payload) {
        state.users = payload;
    }

};

const actions = {

    addUser({commit}, _user) {
        addUser(_user).then(function (userObj) {
            var userData = Object.assign(
                _user,
                {id: userObj.key}
            );
            commit('addUser', userData);
        });
    },

    allUsers({commit}) {
        allUser().then(function (val) {

            var data = [];
            for (let key in val) {
                var obj = {
                    id: key,
                    firstName: val[key].firstName,
                    lastName: val[key].lastName,
                    email: val[key].email,
                    password: val[key].password
                };
                data.push(obj);
            }
            commit('allUsers', data);
        });
    },

    getUserByKey({commit}, userId) {
        return new Promise((resolve, reject) => {
            fetchData(`users/${userId}`)
                .then(function (user) {
                    resolve(user)
                })
                .catch(error => {
                    reject(error)
                })
        });

    }

};

export default {
    state,
    getters,
    mutations,
    actions
}
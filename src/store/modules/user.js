import {auth} from "../../api/api"
import {fetchData, allUser, addUser, updateUser} from "../../api/user"

const state = {
    users: [],
    user: null,
    logInUser: {
        id: null,
        name: null
    }
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
        return new Promise((resolve, reject) => {

            auth()
                .createUser(_user.email, _user.password)
                .then(function (res) {

                    let userDataWithId = Object.assign(_user, {authId: res.uid});

                    addUser(_user)
                        .then(function (userObj) {
                            var userData = Object.assign(
                                userDataWithId,
                                {id: userObj.key}
                            );
                            resolve(true);
                            commit('addUser', userData);
                        });
                })
                .catch(error => {
                    reject(error.message);
                });

        });

    },

    editUser({commit}, payload) {
        updateUser(payload);
    },

    allUsers({commit}) {
        allUser().then(function (val) {

            var data = [];

            for (let key in val) {
                var obj = {
                    id: key,
                    authId: val[key].authId,
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

    },

    logIn({commit}, payload) {

    }

};

export default {
    state,
    getters,
    mutations,
    actions
}
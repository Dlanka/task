import {fetch, insert, update} from './api'

export function fetchData(_child) {
    return fetch(_child)
}

export function allUser() {
    return fetch('users');
}

export function addUser(user) {
    return insert('users', user);
}

export function updateUser(payload) {
    return update('users/' + payload.key, payload.data);
}

export function getUserByKey(key) {
    return fetch('users/' + key);
}



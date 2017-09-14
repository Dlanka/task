import * as firebase from 'firebase'

export function auth() {
    var _auth = firebase.auth();
    return {
        createUser(email, password) {
            return _auth.createUserWithEmailAndPassword(email, password);
        },

        signIn(email, password) {
            return _auth.signInWithEmailAndPassword(email, password);
        },

        logOut() {

        }
    }
}

export function fetch(_child) {

    var db = firebase.database();
    var ref = db.ref();

    return new Promise((resolve, reject) => {
        var data = ref.child(_child);
        data.once('value')
            .then(function (snapshot) {
                resolve(snapshot.val())
            })
            .catch(error => {
                reject(error)
            });
    });
}

export function insert(_child, payload) {

    let db = firebase.database();
    let ref = db.ref();

    return ref.child(_child).push(payload);

}

export function update(_child, payload) {

    let db = firebase.database();
    let ref = db.ref();

    return ref.child(_child).update(payload);

}
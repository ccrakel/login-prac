"use strict";

const fs = require("fs").promises; // file system 내장 모듈
// promise는 수행하는 동작이 끝남과 동시에 상태를 알려주기 때문에 비동기 처리에 효과적

class UserStorage {
    // 음닉함수는 클래스 최상단에
    static #getUserInfo(data, id) {
        const users = JSON.parse(data); // 16진수 buffer JSON으로
        const idx = users.id.indexOf(id)
        const usersKeys = Object.keys(users); // => [id, pw, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
            return userInfo;
    }

    static getUsers(...fields) { // ... 으로 배열형태로
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);
    }
        //  , (err, data) => {
        //     if (err) throw err;
        //     const users = JSON.parse(data); // 16진수 buffer JSON으로
        //     const idx = users.id.indexOf(id)
        //     const usersKeys = Object.keys(users); // => [id, pw, name]
        //     const userInfo = usersKeys.reduce((newUser, info) => {
        //         newUser[info] = users[info][idx];
        //         return newUser;
        //     }, {});
        //     return userInfo;
        // });

    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo. id);
        users.name.push(userInfo.name);
        users.pw.push(userInfo.pw);
        return { success: true }
    }
}

module.exports = UserStorage;
"use strict";

class UserStorage {
    static #users = { //변수 음닉화 # 
	    id: ["crakel", "root", "temp"],
        pw: ["1234", "1234", "123456"],
        name :["본인", "루트", "임시"],
    };

    static getUsers(...fields) { // ... 으로 배열형태로
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;
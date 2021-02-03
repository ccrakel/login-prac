"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }
    async login() {
        const client = this.body;
        const { id, pw } = await UserStorage.getUserInfo(client.id);
        // await 으로 promise를 반환하는 데이터를 다 받을때까지 기다림
        // await은 async함수 안에서만 사용 가능
        // async await 함수는 자체적으로 promise를 반환한다
        
        if (id) {
            if (id === client.id && pw === client.pw) {
                return { success : true };
            }
            return { success : false, msg: "비밀번호가 틀렸습니다" };
        }
        return { success : false, msg: "존재하지 않는 아이디입니다." };   
    }

    async register() {
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return response;
        } catch (err) { 
            return { success: false, msg: err };
        }
    }
}

module.exports = User;
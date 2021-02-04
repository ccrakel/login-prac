"use strict";
// controller file

const User = require("../../models/User")


const output = {
	home: (req, res) => {
		// 렌더링 기능
		res.render("./home/index");
	},

	login: (req, res) => {
		res.render("./home/login");
	},

	register: (req, res) => {
		res.render("./home/register");
	}
};

const process = {
	login: async (req, res) => {
		const user = new User(req.body);
		const response = await user.login();
		return res.json(response);

		// src/models/User.js 에 구현
		// const id = req.body.id,
		// 	pw = req.body.pw;
		// const users = UserStorage.getUsers("id", "pw");

		// const response = {};
		// if (users.id.includes(id)) {
		// 	const idx = users.id.indexOf(id);
		// 	if (users.pw[idx] === pw) {
		// 		response.success = true;
		// 		return res.json(response);
		// 	}
		// }
		
		// response.success = false;
		// response.msg = "로그인에 실패하였습니다."
		// return res.json(response);
	},
	register: async (req, res) => {
		const user = new User(req.body);
		const response = await user.register();
		return res.json(response);
	},
};
// object key 하나만 입력 -> 키와 같은 value로 넣어줌 (ES6)
module.exports = {
	output,
	process,
};


"use strict";
// controller file

const UserStorage = require("../../models/UserStorage")

const output = {
	home: (req, res) => {
		// 렌더링 기능
		res.render("home/index");
	},

	login: (req, res) => {
		res.render("home/login");
	},
};

const process = {
	login: (req, res) => {
		const id = req.body.id,
			pw = req.body.pw;
		
		const users = UserStorage.getUsers("id", "pw");

		const response = {};
		if (users.id.includes(id)) {
			const idx = users.id.indexOf(id);
			if (users.pw[idx] === pw) {
				response.success = true;
				return res.json(response);
			}
		}
		
		response.success = false;
		response.msg = "로그인에 실패하였습니다."
		return res.json(response);
	},
};
// object key 하나만 입력 -> 키와 같은 value로 넣어줌 (ES6)
module.exports = {
	output,
	process,
};


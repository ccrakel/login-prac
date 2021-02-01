"use strict";
// controller file
const output = {
	home: (req, res) => {
		// 렌더링 기능
		res.render("home/index");
	},

	login: (req, res) => {
		res.render("home/login");
	},
};

const users = {
	id: ["crakel", "root", "temp"],
	pw: ["1234", "1234", "123456"]
	
}

const process = {
	login: (req, res) => {
		const id = req.body.id,
			pw = req.body.pw
	
		if (users.id.includes(id)) {
			const idx = users.id.indexOf(id);
			if (users.pw[idx] === pw) {
				return res.json({
					success: true,
				});
			}
		}

		return res.json({
			success: false,
			msg: "로그인에 실패하였습니다.",
		});
	},
}
// object key 하나만 입력 -> 키와 같은 value로 넣어줌 (ES6)
module.exports = {
	output,
	process,
};


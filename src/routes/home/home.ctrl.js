"use strict";

const home = (req, res) => {
        // 기능
        res.render("home/index");
};

const login = (req, res) => {
        res.render("home/login");
};

// object key 하나만 입력 -> 키와 같은 value로 넣어줌 (ES6)
module.exports = {
    home,
    login, 
};


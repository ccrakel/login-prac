"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);

router.get("/login", ctrl.login);

module.exports = router; // 외부로 사용할 수 있도록 내보내기
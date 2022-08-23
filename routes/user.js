const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("ユーザーリスト");
});
  
router.get("/info", (req, res) => {
res.send("ユーザー情報");
});

router.post("/create", (req, res) => {
res.send("ユーザーを作成しました");
});

module.exports = router;
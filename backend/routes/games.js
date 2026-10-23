const express = require("express");

const router = express.Router();

router.get("/games", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Demo Dice",
      type: "demo",
      realMoney: false
    }
  ]);
});

module.exports = router;

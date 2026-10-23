const express = require("express");

const router = express.Router();

const games = [
  {
    id: 1,
    name: "Lucky Dice",
    type: "dice",
    realMoney: false,
    payout: "2.5x",
    popularity: 96,
    description: "Fast, simple and fun. Roll to win."
  },
  {
    id: 2,
    name: "Crash Royale",
    type: "crash",
    realMoney: true,
    payout: "4.8x",
    popularity: 91,
    description: "Cash out before the multiplier crashes."
  },
  {
    id: 3,
    name: "Golden Slots",
    type: "slots",
    realMoney: true,
    payout: "5.0x",
    popularity: 88,
    description: "Spin for jackpots and bonus rounds."
  },
  {
    id: 4,
    name: "Roulette Rush",
    type: "roulette",
    realMoney: true,
    payout: "3.2x",
    popularity: 90,
    description: "High-risk wheel action with multipliers."
  }
];

router.get("/games", (req, res) => {
  res.json(games);
});

router.get("/games/:id", (req, res) => {
  const game = games.find((item) => item.id === Number(req.params.id));

  if (!game) {
    return res.status(404).json({ message: "Game not found" });
  }

  return res.json(game);
});

router.post("/games", (req, res) => {
  const { name, type, realMoney, payout, description } = req.body;

  if (!name || !type) {
    return res.status(400).json({ message: "Name and type are required" });
  }

  const game = {
    id: games.length + 1,
    name,
    type,
    realMoney: Boolean(realMoney),
    payout: payout || "1.0x",
    popularity: 80,
    description: description || "New game added"
  };

  games.push(game);

  return res.status(201).json(game);
});

module.exports = router;

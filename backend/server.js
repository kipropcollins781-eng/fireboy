const express = require("express");
const cors = require("cors");
const gamesRouter = require("./routes/games");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/api", gamesRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Fireboy Casino Demo API is running",
    status: "online"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "fireboy-backend"
  });
});

app.listen(PORT, () => {
  console.log(`Fireboy backend running on http://localhost:${PORT}`);
});

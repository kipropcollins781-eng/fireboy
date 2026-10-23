const express = require("express");
const gamesRouter = require("./routes/games");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", gamesRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Fireboy Casino Demo API is running",
    status: "online"
  });
});

app.listen(PORT, () => {
  console.log(`Fireboy backend running on http://localhost:${PORT}`);
});

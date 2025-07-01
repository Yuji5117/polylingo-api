import express from "express";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Translation API is running!");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

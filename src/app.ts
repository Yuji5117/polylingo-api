import express from "express";
import translateRouter from "./routes/translate.router";

const app = express();

app.use(express.json());

app.use("/api/translate", translateRouter);

export default app;

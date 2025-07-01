import express from "express";
import translateRouter from "./routes/translate.router";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(express.json());

app.use("/api/translate", translateRouter);

app.use(errorHandler);

export default app;

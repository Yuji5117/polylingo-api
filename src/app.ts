import express from "express";
import translateRouter from "./routes/translate.router";
import { errorHandler } from "./middleware/errorHandler";
import { apiKeyAuth } from "./middleware/apiKeyAuth";

const app = express();

app.use(express.json());

app.use(apiKeyAuth);

app.use("/api/translate", translateRouter);

app.use(errorHandler);

export default app;

import express, {Express, Request, Response, NextFunction} from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import authRouter from "./routes/authRoutes";

const app: Express = express();

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

app.use("/api/auth", authRouter);

const PORT = process.env.PORT ?? 5000;


app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))


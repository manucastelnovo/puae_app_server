import express, { Application } from "express";
import authRoutes from "./feature/user/presentation/routes/auth";
import morgan from "morgan";

const app: Application = express();

//settings

app.set("port", 4000);

//middlewares

app.use(morgan("dev"));

//routes

app.use(authRoutes);

export default app;

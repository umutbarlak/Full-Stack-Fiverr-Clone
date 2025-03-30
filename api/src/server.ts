import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.ts";
import gigRouter from "./routes/gig.route.ts";
import reviewRouter from "./routes/review.route.ts";
import errorMiddleware from "./middleware/errorHandler.ts";

dotenv.config();

mongoose
  .connect(process.env.DATABASE_URL as string)
  .then(() => {
    console.log("❤️ Veri tabanına bağlandı");
  })
  .catch((err) => console.log("Veri tabanı bağlanamadı 😩", err));

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/auth", authRouter);
app.use("/api/gigs", gigRouter);
app.use("/api/reviews", reviewRouter);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`😄 Server ${process.env.PORT}. portu dinlenmeye başlandıı`);
});

import express from "express";
import cors from "cors";
import { connectDB } from "./db/connect.mjs";
import "dotenv/config";
import { userRouter } from "./routes/user.router.mjs";
import { authRouter } from "./routes/auth.router.mjs";
import { recipeRouter } from "./routes/recipe.router.mjs";
import { errorHandlerMiddleware } from "./middleware/error-handler.mjs";

const PORT = process.env.PORT || 8080;
const mongo_uri = process.env.MONGO_URI;

// setup static and middleware
const app = express();
app.use(cors());
app.use(express.static("./public"));
app.use(express.json());

//routes
//app.use("/api/v1/users", UserRouter);

app.use("/api/v1/auth", authRouter); // auth
app.use("/api/v1/recipes", recipeRouter);
app.use("/api/v1/users", userRouter);
app.use(errorHandlerMiddleware);

// app.get("/api/v1/recipes", (req, res) => {
//   res.json("Hello from recipes");
// });

// app.get("/message", (req, res) => {
//   res.json("Hello from server!");
// });

app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});

const start = async () => {
  try {
    await connectDB(mongo_uri);
    app.listen(PORT, console.log(`Server running on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();

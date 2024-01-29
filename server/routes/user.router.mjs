import express from "express";
import {
  getUser,
  getUserByEmail,
  getAllUsers,
} from "../Controllers/user.controller.mjs";

export const userRouter = express.Router();

// import {
//   createUser,
//   getAllUsers,
//   getUser,
//   updateUser,
//   deleteUser,
// } from "../Controllers/userControllers.mjs";

// UserRouter.post("/", (req, res) => {
//   createUser(req, res);
//   //res.json(req.body);
// });

// UserRouter.get("/", (req, res) => {
//   //getAllUsers(req, res);
//   res.json(req.body);
// });

userRouter.get("/:id", (req, res) => {
  getUser(req, res);
});
//getUserByEmail
userRouter.get("/user/:email", (req, res) => {
  getUserByEmail(req, res);
});

userRouter.get("/", (req, res) => {
  getAllUsers(req, res);
});

// UserRouter.patch("/:id", (req, res) => {
//   //updateUser(req, res);
//   res.json(req.body);
// });

// UserRouter.delete("/:id", (req, res) => {
//   //deleteUser(req, res);
//   res.json(req.body);
// });

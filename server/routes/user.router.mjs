import express from "express";
import {
  getUser,
  getUserByEmail,
  getAllUsers,
} from "../Controllers/user.controller.mjs";

export const userRouter = express.Router();

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



import express from "express";

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

// UserRouter.patch("/:id", (req, res) => {
//   //updateUser(req, res);
//   res.json(req.body);
// });

// UserRouter.delete("/:id", (req, res) => {
//   //deleteUser(req, res);
//   res.json(req.body);
// });

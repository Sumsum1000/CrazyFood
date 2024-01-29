import express from "express";

export const testRouter = express.Router();

testRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({ id: id });
});

testRouter.get("/asaf/:email", (req, res) => {
  const email = req.params.email;
  res.status(200).json({ email: email });
});

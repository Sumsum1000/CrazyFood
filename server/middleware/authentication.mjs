// const User = require("../models/User");
// const jwt = require("jsonwebtoken");
import { User } from "../Models/User.model.mjs";
import Jwt from "jsonwebtoken";

import { UnauthenticatedError } from "../errors/unauthenticated.mjs";

export const authMiddleware = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    //throw error
    throw new UnauthenticatedError("Authontication failed");
  }
  // split the header and get the token
  const token = authHeader.split(" ")[1];

  try {
    const payload = Jwt.verify(token, process.env.JWT_SECRET);
    req.user = { UserId: payload.userId, name: payload.name };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authontication failed");
  }
};

const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const auth = async (req, res, next) => {
  // check header
  const authHeader = req.headers.yuthorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    //throw error
    throw new UnauthenticatedError("Authontication failed");
  }
  // split the header and get the token
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { UserId: payload.userId, name: payload.name };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authontication failed");
  }
};

module.exports = auth;
// check header
// split the header and get the token
// verify token

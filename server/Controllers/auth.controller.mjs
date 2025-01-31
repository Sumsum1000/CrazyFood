import { User } from "../Models/User.model.mjs";
import StatusCodes from "http-status-codes";
import { BadRequestError } from "../errors/bad-request.mjs";
import { NotFoundError } from "../errors/not-found.mjs";
import { UnauthenticatedError } from "../errors/unauthenticated.mjs";

export const register = async (req, res) => {
  try {
    const { name, password, email } = req.body;

    if (!name || !password || !email) {
      throw new BadRequestError("Check your input fields");
    }

    const user = await User.create({ ...req.body });
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new BadRequestError("Please enter email and password");
    }

    const user = await User.findOne({ email });

    if (!user) {
      throw new NotFoundError("User doesnt exists");
    }

    const correctPassword = await user.comparePassword(password);

    if (!correctPassword) {
      throw new UnauthenticatedError("Invalid credentials");
    }

    const token = user.createJWT();

    res.status(StatusCodes.OK).json({
      user: { email: user.email, name: user.name, userId: user._id },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({ message: error.message });
  }
};

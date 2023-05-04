import { User } from "../Models/User.model.mjs";

export const createUser = async (req, res) => {
  try {
    //res.send("createUser");
    const user = await User.create(req.body);
    res.status(201).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    //res.send("getAllUsers");
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const getUser = async (req, res) => {
  //   try {
  //     res.status(200).json({ user: "ok" });
  //   } catch (error) {
  //     res.status(500).json({ msg: error });
  //   }
  res.send("User");
};

export const updateUser = async (req, res) => {
  try {
    res.send("updateUser");
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    res.send("deleteUser");
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

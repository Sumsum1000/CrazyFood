import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide a name"],
    trim: true,
    maxlength: [20, "name cant be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export const User = mongoose.model("Task", UserSchema);

import mongoose from "mongoose";
import validator from "validator";
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    minlength: [3, "first name must atleast contain 3 char"],
  },
  last_name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "invalid email"],
  },
},{timestamps:true});
export const User = mongoose.model("User", userSchema);

import { User } from "../Model/user.js";
import { ErrorHandler } from "../utils/ErrorHandler.js";
import { catchAsync } from "../utils/catchAsync.js";

export const getMe = catchAsync(async (req, res, next) => {
  // setup auth and get id by req.id using authMiddleware
  // for shake of the task id is taken from params
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) return next(new ErrorHandler(400, "user not found"));
  res.status(200).json({ success: true, user });
});
export const createMe = catchAsync(async (req, res, next) => {
  const { first_name, last_name, email } = req.body;
  if (!first_name || !last_name || !email)
    return next(new ErrorHandler(400, "provide all fields"));
  const user = await User.create({ first_name, last_name, email });
  res.status(201).json({ success: true, message: "user created", user });
});
export const updateMe = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { first_name, last_name, email } = req.body;
  const user = await User.findById(id);
  if (!user) return next(new ErrorHandler(400, "user not found"));
  user.first_name = first_name;
  user.last_name = last_name;
  user.email = email;
  await user.save();
  res
    .status(200)
    .json({ success: true, message: "user updated", user });
});
export const deleteMe = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) return next(new ErrorHandler(400, "user not found"));
  await user.deleteOne();
  res.status(200).json({ success: true, message: "user deleted" });
});

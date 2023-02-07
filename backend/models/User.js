import mongoose from "mongoose";
import Joi from "joi";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: { type: String },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    min: 6,
    max: 30,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

export const User = mongoose.model("user", userSchema);

export const validate = (user) => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    name: Joi.string(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required(),
    confirmPassword: Joi.string(),
  });
  return schema.validate(user);
};

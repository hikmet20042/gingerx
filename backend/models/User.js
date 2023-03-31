import { Schema, model } from "mongoose";

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Please enter a password with minimum 8 length"],
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
    required: true,
    unique: true,
  },
});

export default model("User", userSchema);

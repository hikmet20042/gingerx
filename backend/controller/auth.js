import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  const { SECRET_KEY } = process.env;
  try {
    const user = await User.findOne({ email });

    const isPasswordTrue = await bcrypt.compare(password, user.password);

    if (isPasswordTrue) {
      const access_token = jwt.sign(email, SECRET_KEY);
      res
        .status(200)
        .cookie("jwtToken", access_token, {
          httpOnly: true,
          expires: new Date(Date.now() + 10 * 1000),
          secure: false,
        })
        .send({
          success: true,
          message: "You successfully login!",
          access_token,
        });
    } else {
      res.status(403).json({
        success: false,
        message: "Your email or password is invalid.",
      });
    }
  } catch (error) {
    res.status(403).json({
      success: false,
      message: error,
    });
  }
};

export const register = async (req, res, next) => {
  const { fullname, email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt();
    const hashedPass = await bcrypt.hash(password, salt);
    const user = await User.create({
      fullname,
      email,
      password: hashedPass,
    });
    await user.save();
    res.status(200).json({
      success: true,
      message: "You successfully registered!",
    });
  } catch (error) {
    res.status(403).json({
      success: false,
      error,
    });
  }
};

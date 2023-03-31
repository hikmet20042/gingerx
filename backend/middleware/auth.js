import jwt from "jsonwebtoken";

export function verifyToken(req, res, next) {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(403).send("Access Denied");
    }
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }
    const { SECRET_KEY } = process.env;

    if (!token) {
      return res.status(401).send({
        success: false,
        message: "You are not authorized, please login!",
      });
    }
    const verified = jwt.verify(token, SECRET_KEY);
    req.user = verified;
    next();
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

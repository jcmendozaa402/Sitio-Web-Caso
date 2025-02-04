const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Autenticación requerida." });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decodedToken.userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token invalido." });
  }
};

module.exports = { authenticate };

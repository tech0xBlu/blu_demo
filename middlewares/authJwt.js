const jwt = require("jsonwebtoken");
const { secret } = require("../config/auth.config.js");
const config = require("../config/auth.config.js");
const db = require("../models");


verifyToken = (req, res, next) => {
  let token = req.headers["authorization"];

  token = token.replace(/^Bearer\s+/, "");

  console.log('req headers',token)

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

console.log('secret: ', secret)

  jwt.verify(token, config.secret, (err, decoded) => {
    console.log('requesd id: ', decoded)
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};

const authJwt = {
  verifyToken
};
module.exports = authJwt;
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


checkUserEmail = (req, res, next) => {
  // Email
  User.findOne({
    email: req.body.email
  }).exec((err, user) => {
    if (err) {
      console.log('email not found')
      res.status(500).send({ 
          status: 500, 
          message: "Failed! Email not found",
          data: {} 
      });
      return;
    }

    // if (!user) {
    //   res.status(400).send({
          
    //       status: 400, 
    //       message: "Failed! Username is already in use!",
    //       data: {} 
    //    });
    //   return;
    // }

    next();
  });

};
const authJwt = {
  verifyToken,
  checkUserEmail
};
module.exports = authJwt;
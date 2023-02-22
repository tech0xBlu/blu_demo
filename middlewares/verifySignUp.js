const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateEmail = (req, res, next) => {
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

      if (user) {
        res.status(400).send({
            
            status: 400, 
            message: "Failed! Username is already in use!",
            data: {} 
         });
        return;
      }

      next();
    });
  
};


const verifySignUp = {
    checkDuplicateEmail
  };
  
  module.exports = verifySignUp;
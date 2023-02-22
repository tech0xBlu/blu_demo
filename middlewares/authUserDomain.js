const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

authUserDomain = (req, res, next) => {

    var id = new require('mongodb').ObjectID(req.userId);//req.params.id

    // Email
    User.findOne({
      _id: id
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
            message: "Domain name already registered",
            data: {} 
         });
        return;
      }

      next();
    });
  
};


const verifyUserDomain = {
    authUserDomain
  };
  
  module.exports = verifyUserDomain;
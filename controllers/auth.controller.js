const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { user } = require("../models");

exports.signup = (req, res) => {
  console.log('inside sighnup request')
  const user = new User({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });

  user.save((err, user) => {
    if (err) {
      console.log('error for 500')
      res.status(500).send({ 
        status: 500, 
        message: err,
        data: {}
       });
      return;
    }

    res.send({
      status: 200, 
      message: "User was registered successfully!",
      data: {} 
    }
      );

  });
};

exports.signin = (req, res) => {
  console.log('inside signin controller', req.body);
  User.findOne({
        email: req.body.email
      }).exec((err, user) => {
        if (err) {
          res.status(500).send({ 
            status: 500, 
            message: err,
            data: {}
           });
          return;
        }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
        status: 401, 
        message: "Invalid Password!",
        data: {accessToken: null}
          
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

  
      res.status(200).send({
        status: 200, 
        message: "Invalid Password!",
        data: {accessToken: token,
          id: user._id,
        email: user.email
        }

        
      });
    });
};
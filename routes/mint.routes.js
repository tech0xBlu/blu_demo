const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/mintDomain.controller");
const { authJwt } = require("../middlewares");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

//   app.post(
//     "/api/user/mintDomain",
//     [
//       verifySignUp.checkDuplicateEmail,
//     ],
//     controller.signup
//   );

  app.post("/api/user/mintDomain",
  [
    authJwt.verifyToken,
],
  controller.mintDomain);
};
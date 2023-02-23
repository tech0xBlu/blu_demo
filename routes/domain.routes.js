const { verifySignUp } = require("../middlewares");
const { authJwt } = require("../middlewares");
const controller = require("../controllers/domain.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/user/Domain/addDomain",
    [
        authJwt.verifyToken,
    ],
    controller.add_domain
  );

  app.post(
    "/api/user/Domain/checkDomain",
    [
        authJwt.verifyToken,
    ],
    controller.check_domain
  );

  // app.post("/api/auth/Domain/listDomain", controller.signin);

  // app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);


};
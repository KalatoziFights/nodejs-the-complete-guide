const User = require("../models/user");

exports.getLogin = (req, res) => {
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuth: false,
  });
};

exports.postLogin = (req, res) => {
  User.findById("64665746d5e51160b906ab5d")
    .then((user) => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.postLogout = (req, res) => {
  req.session.destroy(() => res.redirect("/"));
};

exports.getLogin = (req, res) => {
  const isLoggedIn = req.get("Cookie");
  console.log(req.session, "session");
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuth: isLoggedIn,
  });
};

exports.postLogin = (req, res) => {
  req.session.isLoggedIn = true;
  res.redirect("/");
};

var express = require("express");
var router = require("express").Router();
var passport = require("passport");

// The root route renders our only view
router.get("/", function (req, res) {
  res.redirect("/traders");
});

// Google OAuth login route
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth callback route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/traders",
    failureRedirect: "/traders"
  })
);

// OAuth logout route
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;

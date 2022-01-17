const passport = require("passport");

exports.authenticateAdmin = passport.authenticate("admin-role", {
	session: false,
});

exports.authenticateUser = passport.authenticate("user-role", {
	session: false,
});

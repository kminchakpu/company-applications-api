const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get(
  "/google",
  /*
    #swagger.tags = ['Authentication']
    #swagger.summary = 'Login with Google'
    #swagger.description = 'Starts the Google OAuth 2.0 authentication process and redirects the user to Google for login.'
    #swagger.responses[302] = {
      description: 'Redirects the user to Google for authentication'
    }
  */
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  /*
    #swagger.tags = ['Authentication']
    #swagger.summary = 'Google OAuth callback'
    #swagger.description = 'Handles the callback from Google after authentication. Successful authentication creates a user session.'
    #swagger.responses[302] = {
      description: 'Authentication successful and user is redirected to profile'
    }
    #swagger.responses[401] = {
      description: 'Google authentication failed'
    }
  */
  passport.authenticate("google", {
    failureRedirect: "/auth/failure",
  }),
  (req, res) => {
    res.redirect("/auth/profile");
  }
);

router.get("/profile", (req, res) => {
  /*
    #swagger.tags = ['Authentication']
    #swagger.summary = 'Get authenticated user profile'
    #swagger.description = 'Returns the profile information of the currently authenticated Google user.'
    #swagger.security = [{
      "sessionAuth": []
    }]
    #swagger.responses[200] = {
      description: 'Authenticated user profile returned successfully'
    }
    #swagger.responses[401] = {
      description: 'Authentication required'
    }
  */
  if (!req.isAuthenticated()) {
    return res.status(401).json({
      message: "Authentication required",
    });
  }

  res.status(200).json({
    message: "Authentication successful",
    user: {
      id: req.user.id,
      displayName: req.user.displayName,
      email: req.user.emails?.[0]?.value,
    },
  });
});

router.get("/failure", (req, res) => {
  /*
    #swagger.tags = ['Authentication']
    #swagger.summary = 'Authentication failure'
    #swagger.description = 'Returns an error response when Google OAuth authentication fails.'
    #swagger.responses[401] = {
      description: 'Google authentication failed'
    }
  */
  res.status(401).json({
    message: "Google authentication failed",
  });
});

router.get("/logout", (req, res, next) => {
  /*
    #swagger.tags = ['Authentication']
    #swagger.summary = 'Logout current user'
    #swagger.description = 'Logs out the authenticated user and destroys the current session.'
    #swagger.security = [{
      "sessionAuth": []
    }]
    #swagger.responses[200] = {
      description: 'Logged out successfully'
    }
    #swagger.responses[500] = {
      description: 'Error while logging out'
    }
  */
  req.logout((error) => {
    if (error) {
      return next(error);
    }

    req.session.destroy((sessionError) => {
      if (sessionError) {
        return next(sessionError);
      }

      res.clearCookie("connect.sid");

      return res.status(200).json({
        message: "Logged out successfully",
      });
    });
  });
});

module.exports = router;
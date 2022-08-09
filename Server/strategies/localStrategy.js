const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const Employee = require("../models/employee")

//Called during login/sign up.
passport.use(new LocalStrategy({
    usernameField: 'email',
    session: false
  },
  async function(username, password, done) {
    try {
        console.log("username", username);

        const user = await Employee.findOne({ email: username });
        console.log("user", user)
        return done(null, user)
    } catch (err) {
        console.log("auth eror", err)
        return done(err)
    }
    
  }
));
// passport.use(new LocalStrategy(Employee.authenticate()))

//called while after logging in / signing up to set user details in req.user
passport.serializeUser(Employee.serializeUser())

const jwt = require("jsonwebtoken");
const { ErrorObj } = require("./handleErrorMiddlerware");
const Employee = require("./models/employee");

const jwtValidator =  async (req, res, next) => {
    const accesToken = req.cookies && req.cookies.jwt;
    if(!accesToken) {
        res.clearCookie("jwt").clearCookie("userId")
        const errObj = new ErrorObj(401, "your login session expired pls login again");
        return next(errObj)
    }

    jwt.verify(accesToken, process.env.JWT_SECRET, async(err, decoded) => {
        if(decoded) {
            req.user = {...decoded};
            return next();
        }
        else if(err && err.name === "TokenExpiredError"){
            const decode = jwt.decode(accesToken) ;
            const employe =  await Employee.findById(decode.id);
            
            if (employe && employe.refreshToken){
                const jwtPayload = {
                    firstName: employe.firstName,
                    email: employe.email,
                    id: employe._id,
                  };
                try {
                    await jwt.verify(employe.refreshToken, process.env.REFRESH_TOKEN_SECRET);
                    const newToken = accessTokenGenerator(jwtPayload);
                    res.cookie("jwt", newToken, {  httpOnly: true, maxAge: 86400 }).cookie("userId", `${user._id}`, {  httpOnly: true, maxAge: 86400});
                    req.user = {...jwtPayload};
                    return next()
                } catch (err){
                    res.clearCookie("jwt").clearCookie("userId")
                    return next({...err, status: 403})
                }

            }
        } else {
            res.clearCookie("jwt").clearCookie("userId")
            console.log("jwt error", err)
            return next({...err, status: 403})
        }
    })
}


 const accessTokenGenerator = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: 120});
}

 const refreshTokenGenerator = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: 86400});
}

module.exports = {refreshTokenGenerator, accessTokenGenerator, jwtValidator}
const jwt = require("jsonwebtoken");


const validateToken = async(req,res,next) => {

const token = req.header("Authorization");

let splitToken = token.split(" ");

const decodedToken = jwt.verify(splitToken[1], process.env.ACCESS_TOKEN_SECRET,{
    ignoreExpiration: true,
  });
  req.user = decodedToken.user;

  next();
}

module.exports = validateToken;
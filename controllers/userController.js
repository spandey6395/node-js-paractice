
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user") 


// Register a user
const registerUser = async (req,res) => {

let data = req.body

const {username, email , password} = data;

//console.log(req.body);

if(!username||!email||!password) {

    return res.status(400).send({ message: "All fields is required" })
}

//console.log(userModel);

const userAvailable = await userModel.findOne({email})

//console.log(userAvailable)

if(userAvailable) {

    return res.status(400).send({ status: false, msg: "User already available" })
}

//Hash Password
// Here 10 is the salt round that we want for hashing the password

let securePassword = password;
const encryptedPassword = async function (securePassword) {
    const passwordHash = await bcrypt.hash(securePassword, 10);
   data.password = passwordHash;
  };
  await encryptedPassword(securePassword);

const user = await userModel.create(data);
res.status(201).send({ msg: "user is created" })

 };
 

 // login user


 const loginUser = async (req,res) => {
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).send({ message: "All fields is required" })
    }

    const user = await userModel.findOne({email});

    //compare password with hashedpassword
    
   if(user && (await bcrypt.compare(password,user.password))){

    const acessToken = jwt.sign({

        user:{
            username:user.username,
            email:user.email,
            id:user.id,
        },
    },
     process.env.ACCESS_TOKEN_SECRET,
       {expiresIn: "1h"}


    );
    res.status(200).json({acessToken});
   }else{
    res.status(401).send({msg:"email and password is not correct"})
   }
 };


 //Current user info
 //access= private
 // Only a logged in user can get the current info of user

 const currentUser = async (req,res) => {
    res.json(req.user);
 }

 module.exports = {registerUser, loginUser, currentUser};
let bcrypt=require("bcrypt");
let jwt = require('jsonwebtoken')
const userModel = require("../models/user")
//this is for the registration
let registerController = async (req, res) => {
    try {
        if (!req.body.email) return res.status(404).send({ message: "All field are requied*", success: false })
        let existUser = await userModel.findOne({ email: req.body.email })
        if (existUser) return res.status(200).send({ messge: "User is Already Registered ", success: false })
        if (!req.body.password) return res.status(404).send({ message: "All field are requied*", success: false })
        //Hashing-Password
        let salt = await bcrypt.genSalt(10)
        let hashPassword = await bcrypt.hash(req.body.password, salt)
        let newUser = new userModel({ ...req.body, password: hashPassword })
        await newUser.save()
        res.status(201).send({
            message: "User Registered Succussfully",
            success: true,
            newUser
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Somthing Wrong in Registration",
            error,
            success: false
        })
    }
}

let loginController=async(req,res)=>{
    try {
        if (!req.body.email || !req.body.password) return res.status(401).send({ message: "All fields are required *" })
            let findData = await userModel.findOne({ email: req.body.email })
            if (!findData) return res.status(400).send({ message: "Either email or password is invalid", success: false })
            //compare password
            let comparePassword = await bcrypt.compare(req.body.password, findData.password)
            if (!comparePassword) return res.status(400).send({ message: "Either email or password is invalid", success: false })
            //create-token
            let token = await jwt.sign({ userId: findData._id }, process.env.SECRET_KEY, { expiresIn: "20days" })
            res.status(200).send({ message: "User is Login Successfully", success: true, token, user: findData })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Somthing Wrong in Login",
            error,
            success: false
        })
    }
}
let getCurrentUserController = async (req, res, next) => {
    try {
        let userId = req.userId;
        let user = await userModel.findOne({ _id: userId })
        res.status(200).send({ message: "User Get SuccessFully", success: true, user })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Somthing wrong , while fetching current user", success: false, error })
    }
}
module.exports={registerController,loginController,getCurrentUserController}
const { Router } = require("express");
const { userModel } = require("../db");
const jwt = require("jsonwebtoken")
const { JWT_USER_PASSWORD } = require("../config")
 
const userRouter = Router();

userRouter.post("/signup", async function (req, res) {

    const email = req.body.email;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
//    use zod validation
    //  put insite a try catch block
    try{
    await userModel.create({
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname
    });
}  catch(e){

}
    res.json({
        msg: "You are signed up"
    }
    )
})


userRouter.post("/signin", async function (req, res) {

    const email = req.body.email;
    const password = req.body.password;

    // task : ideally password should be hashed, and hence you can't compare the user provided password and the database password 
    const user = await userModel.findOne({
        email: email,
        password: password,
    });

    if (user) {
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_USER_PASSWORD)

        res.json({
            token : token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});

    userRouter.get("/purchases", function (req, res) {
        res.json({
            msg: "you are signed up"
        }
        )
    })

    module.exports = {
        userRouter: userRouter
    }
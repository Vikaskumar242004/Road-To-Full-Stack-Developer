const { Router } = require("express")
const adminRouter = Router();
const {adminModel, courseModel} = require("../db")
const jwt = require("jsonwebtoken")

const { JWT_ADMIN_PASSWORD } = require("../config");

adminRouter.post("/signup", async function (req, res) {
    
    const email = req.body.email;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
//    use zod validation
    //  put insite a try catch block
    try{
    await adminModel.create({
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname
    });
}  catch(e){

}
    res.json({
        msg: "you are signed up"
    }
    )
})

adminRouter.post("/signin", async function (req, res) {
  const email = req.body.email;
    const password = req.body.password;

    // task : ideally password should be hashed, and hence you can't compare the user provided password and the database password 
    const admin = await adminModel.findOne({
        email: email,
        password: password,
    });

    if (admin) {
        const token = jwt.sign({
            id: admin._id.toString()
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


//  /api/v1/course  when user create a course so they are this route
adminRouter.post("/course", adminMiddleware, async function (req, res) {
    const adminId = req.userId;
 
    const {Title,Description,Price,ImageUrl,creatorid} = req.body; 

    const course = await courseModel.create({
         Title,Description,Price,ImageUrl,creatorid : adminId
    })
    res.json({
        msg: "Course Created",
        courseid : course._id
    })
})

adminRouter.put("/course", function (req, res) {
    res.json({
        msg: "change the courses"
    }
    )
})

adminRouter.get("/course/bulk", function (req, res) {
    res.json({
        msg: "admin can see all the courses of this site "
    })
})

module.exports = {
    adminRouter: adminRouter
}
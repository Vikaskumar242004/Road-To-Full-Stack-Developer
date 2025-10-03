const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/purchase", function (req, res) {
    res.json({
        msg: "you are signed up"
    }
    )
})

courseRouter.get("/preview", function (req, res) {
    res.json({
        msg: "you are signed up"
    }
    )
})

module.exports = {
    courseRouter: courseRouter
}
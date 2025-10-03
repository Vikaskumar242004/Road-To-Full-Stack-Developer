const mongoose = require("mongoose")
console.log("connected to database")
mongoose.connect("mongodb+srv://100xdevs:WvaTca0509mb90YX@cluster0.ossjd.mongodb.net/vikas-app")
const Schema = mongoose.Schema;

const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstname: String,
    lastname: String
})

const adminSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstname: String,
    lastname: String
})

const courseSchema = new Schema({
    Title: String,
    Description: String,
    Price: Number,
    ImageUrl: String,
    creatorid: ObjectId
})

const purchaseSchema = new Schema({
    userid: ObjectId,
    courseid: ObjectId

})


const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", userSchema);
const courseModel = mongoose.model("course", userSchema);
const purchaseModel = mongoose.model("purchase", userSchema);


module.exports ={
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}
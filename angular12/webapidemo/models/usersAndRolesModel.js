const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema definition - ODM - Object Document Mapping

const userAndRoleSchema = new Schema({
    userId:String,
    password:String,
    role:String

})
const userAndRole = mongoose.model('usersandrole',userAndRoleSchema);
module.exports = userAndRole;
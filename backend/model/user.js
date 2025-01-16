const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
              firstname: {
                            type: String,
                            required: true
              },
              lastname:
              {
                            type: String,
                            required: true,
              },
              email: {
                            type: String,
                            required: true,
                            unique: true,
              },
              forgot_password_otp:
              {
                            type: String, default: null
              },
              forgot_password_expire: {
                            type: Date,
                            default: ""

              },
              role:
              {
                            type: String,
                            enum: ["Admin", "User"],
                            default: "User"
              },
              appliedIPOs: [{ type: mongoose.Schema.Types.ObjectId, ref: "IPO" }],


})

const userModel = mongoose.model("User", userSchema);
module.exports = userModel

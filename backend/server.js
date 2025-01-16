const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload")
require("dotenv").config();
const userRoute = require("./routes/user")
const ipoRoute = require("./routes/ipo")
const app = express();
mongoose.connect(process.env.MONGOURL).then(() => console.log("Connected To The databse")).catch((err) => console.log("not connected"))
app.use(express.json())
app.use(
              fileUpload({
                            useTempFiles: true,
                            tempFileDir: "/tmp/",
              })
);
app.use("/api/v1/user", userRoute)
app.use("/api/v1/ipo", ipoRoute)
app.listen(process.env.PORT, () => {
              console.log("server is running")
})

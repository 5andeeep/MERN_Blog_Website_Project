const mongoose = require("mongoose");
const colors = require("colors");


// connection
mongoose.connect(process.env.MONGODB_URI).then((res) => {
    console.log("MongoDB is Successfully Connected".brightBlue);
}).catch((err) => {
    console.log(`${err}`.red);
});

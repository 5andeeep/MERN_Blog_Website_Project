const colors = require("colors");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

// file-imports
const db = require("./db");
const AuthRouter = require("./Routes/AuthRouter");


// constents
const app = express();
const PORT = process.env.PORT || 8000;

// middleware...
app.use(express.json()); // middleware to read json data..

// home route
app.get("/", (req, res) => {
    return res.send({
        status: 200,
        message: "Server is running."
    });
});


// Routes
app.use("/auth", AuthRouter);




// port listening..
app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`.brightYellow);
})
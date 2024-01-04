const UserSchema = require("../Schemas/UserSchema");
const { cleanUpAndValidate } = require("../Utility/AuthChecker");

const registerUser = async (req, res) => {

    const { name, email, password, username } = req.body;

    try {
        await cleanUpAndValidate({ name, email, password, username });
    } catch (err) {
        return res.send({
            status: 400,
            message: err,
        });
    }

    const userObj = new UserSchema({
        name: name,
        email: email,
        password: password,
        username: username,
    });

    try {
        const userdb = await userObj.save();
        console.log(userdb);
        return res.send({
            status: 201,
            message: "User created successfully!",
            data: userdb
        })
    } catch (error) {
        return res.send({
            status: 500,
            message: "Database Error!",
            error: error,
        })
    }

}

const loginUser = (req, res) => {
    console.log("Login");
    return res.send("All Good");
}



module.exports = { registerUser, loginUser };